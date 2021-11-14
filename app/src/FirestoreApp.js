import React, {useState} from "react";
import App from "./App"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

// Firebase initialization config provided from lab docs
const firebaseConfig = {
    apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
    authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
    projectId: "hmc-cs124-fa21-labs",
    storageBucket: "hmc-cs124-fa21-labs.appspot.com",
    messagingSenderId: "949410042946",
    appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function FirestoreApp(props) {
    const collectionName = "em-zhang-tasks-v6"
    let queryAll = db.collection(collectionName);

    const [all_value, all_loading, all_error] = useCollection(queryAll);

    let listIDs = [];
    if (all_value) {
        listIDs = all_value.docs.map((doc) => {
            return {...doc.data()}});
    }
    const [currentList, setCurrentList] = useState("default-list");

    let query = db.collection(collectionName).doc(currentList).collection("list-items");

    const [sortOption, setSortOption] = useState("dateCreated");
    if (sortOption){
        // sort in descending order by priority
        if (sortOption === "priority"){
            query = query.orderBy(sortOption, "desc");
        } else {
            query = query.orderBy(sortOption);
        }
    }
    const [value, loading, error] = useCollection(query); // You can change the const used here
    let taskList = [];
    if (value) {
        taskList = value.docs.map((doc) => {
            return {...doc.data()}
        });
    }

    // adds a task, generating new id each time
    function handleAddTask(currTask) {
        const newId = generateUniqueID();
        db.collection(collectionName).doc(currentList).collection("list-items").doc(newId).set({
            taskId: newId,
            taskLabel: currTask,
            isCompleted: false,
            priority: 1,
            dateCreated: firebase.database.ServerValue.TIMESTAMP
        });
        return newId;
    }

    // handles updating any field of a task
    function handleTaskFieldChanged(taskId, field, value) {
        const doc = db.collection(collectionName).doc(currentList).collection("list-items").doc(taskId);
        doc.update({
            [field]: value,
        })
    }

    // delete a task based on taskID
    function handleDeleteTask(taskID) {
        db.collection(collectionName).doc(currentList).collection("list-items").doc(taskID).delete();
    }

    // change a task's priority among 1/2/3
    function handleChangePriority(taskID, taskPriority) {
        let docRef = db.collection(collectionName).doc(currentList).collection("list-items").doc(taskID);
        if (taskPriority === 1) {
            docRef.update({
                priority: 2
            })
        } else if (taskPriority === 2) {
            docRef.update({
                priority: 3
            })
        } else if (taskPriority === 3) {
            docRef.update({
                priority: 1
            })
        }
    }

    // delete completed tasks in a list
    function handleDeleteTasks() {
        let delete_query = db.collection(collectionName).where('isCompleted', '==', true);
        delete_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
    }

    // select a sort option
    function handleSortSelected(option){
        setSortOption(option);
    }

    // handles updating any field of a list
    function handleListFieldChanged(listID, field, value) {
        const doc = db.collection(collectionName).doc(listID);
        doc.update({
            [field]: value,
        })
    }

    // add a new list
    function handleAddList(newList){
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            listName: newList,
        })
        return newId;
    }

    // delete a list
    function handleDeleteList(listID) {
        db.collection(collectionName).doc(listID).delete();
    }


    // select and go into a list
    function handleListSelected(list){
        setCurrentList(list)
    }

    // determine what list name to display in the header of the app
    let currentListName = "";
    if (listIDs.length > 0){
        // find the information of the current list that we are displaying
        let currList = listIDs.filter((e) => e.id === currentList);
        if (currList.length > 0) {
            currentListName = listIDs.filter((e) => e.id === currentList)[0].listName;
        }
    }

    return <div>
        <App
            listData={listIDs}
            currListID={currentList}
            currListName={currentListName}
            handleAddList={handleAddList}
            handleListSelected={handleListSelected}
            handleDeleteList={handleDeleteList}
            handleListFieldChanged={handleListFieldChanged}

            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleChangePriority={handleChangePriority}
            handleDeleteTasks={handleDeleteTasks}
            handleAddTask={handleAddTask}
            handleTaskFieldChanged={handleTaskFieldChanged}
            handleSortSelected={handleSortSelected}
            sortOption={sortOption}
        />
        {loading &&
        <div className="loading-message">
            Loading...
        </div>}
    </div>
}

export default FirestoreApp;