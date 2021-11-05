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
    // FirestoreApp collection
    const collectionName = "em-zhang-tasks-v4"
    let query = db.collection(collectionName);

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

    // const taskList = value ? value.docs.map(doc => doc.data()) : [];
    let taskList = [];
    if (value) {
        taskList = value.docs.map((doc) => {
            return {...doc.data()}
        });
    }

    // adds a task, generating new id each time
    function handleAddTask(currTask) {
        const newId = generateUniqueID();
        console.log("adding new task, task ID is ", newId);
        db.collection(collectionName).doc(newId).set({
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
        const doc = db.collection(collectionName).doc(taskId);
        doc.update({
            [field]: value,
        })
    }

    function handleDeleteTask(taskID) {
        console.log("deleting task, task ID is ", taskID);
        db.collection(collectionName).doc(taskID).delete();
    }

    function handleChangePriority(taskID, taskPriority) {
        let docRef = db.collection(collectionName).doc(taskID);
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

    function handleDeleteTasks() {
        let delete_query = db.collection(collectionName).where('isCompleted', '==', true);
        delete_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
    }

    function handleSortSelected(option){
        setSortOption(option);
    }

    return <div>
        <App
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleChangePriority={handleChangePriority}
            handleDeleteTasks={handleDeleteTasks}
            handleAddTask={handleAddTask}
            handleTaskFieldChanged={handleTaskFieldChanged}
            handleSortSelected={handleSortSelected}
            sortOption={sortOption}
        />
    </div>
}

export default FirestoreApp;