import React, { useState } from "react";
import App from "./App"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {query} from "firebase/firebase-database";
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
    const collectionName = "em-zhang-tasks"
    const query = db.collection(collectionName);
    const [value, loading, error] = useCollection(query); // You can change the const used here

    // const [taskList, setTaskList] = useState(props.initialData);
    const [idCounter, setIdCounter] = useState(taskList.length);
    const taskList = value ? value.docs.map(doc => doc.data()) : [];

    // adds a task, maintaining a taskId counter
    function handleAddTask(currTask) {
        console.log("adding new task");
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            taskLabel: currTask,
            isCompleted: false,
            priority: "",
            dateCreated: ""
        })
    }

    // handles updating any field of a task
    function handleTaskFieldChanged(taskId, field, value) {
        console.log("field ", field);
        console.log("value ", value);
        const doc = db.collection(collectionName).doc(taskId);
        doc.update({
            [field]: value,
        })
        // setTaskList(taskList.map(
        //     task => task.taskId !== taskId
        //         ? task
        //         : {...task, [field]: value}))
    }

    // handles task deletion through filtering
    function handleDeleteTask(taskID) {
        db.collection(collectionName).doc(taskID).delete();
    }

    // function handleDeleteTasks() {
    //     setTaskList(taskList.filter(task => task.isCompleted === false))
    // }

    return <div>
        <App
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            // handleDeleteTasks={handleDeleteTasks}
            handleAddTask={handleAddTask}
            handleTaskFieldChanged={handleTaskFieldChanged}
        />
    </div>
}

export default FirestoreApp;