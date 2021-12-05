import React, {useState} from "react";
import App from './App';
import AuthPage from "./components/AuthPage";
import loadingSymbol from '../src/LoadingSymbol.gif'

// Import the functions you need from the SDKs you need
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {  useCollection } from "react-firebase-hooks/firestore";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import AddList from "./components/ListView/AddList";
import ListMenu from "./components/ListView/ListMenu";


const firebaseConfig = {
    apiKey: "AIzaSyDQNFNc9MOCJM7dDkmRmHeJu2-vx_XdZPI",
    authDomain: "em-zhang-cs124-lab.firebaseapp.com",
    projectId: "em-zhang-cs124-lab",
    storageBucket: "em-zhang-cs124-lab.appspot.com",
    messagingSenderId: "791807570724",
    appId: "1:791807570724:web:8c92b693e902d7077ab9b1",
    measurementId: "G-2CLJDP4NEV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

function InMemoryApp(props) {
    const [user, loading, error] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            {user.displayName || user.email}
            <SignedInApp {...props} user={user}/>
            <button type="button" onClick={() => auth.signOut()}>Logout</button>
            {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}
        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
            <AuthPage auth={auth}/>
        </>
    }
}

const collectionName = "TaskManager"

function SignedInApp(props) {
    let queryAll = db.collection(collectionName).where('owner', "==", props.user.uid);
    const [all_value] = useCollection(queryAll);

    let listIDs = [];
    if (all_value) {
        listIDs = all_value.docs.map((doc) => {
            return {...doc.data()}});
    }

    // only get data from the current list
    const [currentList, setCurrentList] = useState("default-list");
    let query = db.collection(collectionName).doc(currentList).collection("list-items")
        .where('owner', "==", props.user.uid);

    // set the sort option to order the query
    const [sortOption, setSortOption] = useState("dateCreated");
    query = query.orderBy(sortOption, sortOption === "priority" ? "desc" : "asc")

    // return values of the task list
    const [value, loading, error] = useCollection(query);
    let taskList = [];
    if (value) {
        taskList = value.docs.map((doc) => {
            return {...doc.data()}
        });
    }

    // delete a task based on taskID
    function handleDeleteTask(taskID) {
        db.collection(collectionName).doc(currentList).collection("list-items").doc(taskID).delete()
            .catch((error) => {
                    console.error("Error deleting document: ", error);
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
            dateCreated: firebase.database.ServerValue.TIMESTAMP,
            owner: props.user.uid
        }).catch((error) => {
            console.error("Error writing document: ", error);
        })
        return newId;
    }

    // handles updating any field of a task
    function handleTaskFieldChanged(taskId, field, value) {
        const doc = db.collection(collectionName).doc(currentList).collection("list-items").doc(taskId);
        doc.update({
            [field]: value,
        }).catch((error) => {
            console.error("Error updating document: ", error);
        })
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
        let delete_query = db.collection(collectionName).doc(currentList).collection("list-items").where('isCompleted', '==', true);
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
            <img src={loadingSymbol} alt="Loading..." />
        </div>}
    </div>
}

export default InMemoryApp;