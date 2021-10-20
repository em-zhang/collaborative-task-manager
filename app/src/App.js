import './App.css';
import './index.js';
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import ToolBar from "./components/ToolBar"
import React, {useState} from "react";
import firebase from "firebase/compat";

// Config provided from lab docs
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

function App(props) {
    // Firebase collection
    const collectionName = "em-zhang-tasks"

    const[showCompleted, setShowCompleted] = useState(true);
    const filteredList = props.taskList.filter(task => showCompleted || !task.isCompleted);
    const numCompleted = props.taskList.filter(task => task.isCompleted).length;

    return (
        <div id="app-container">
            <div className="heading">
                <h1>Task Manager</h1>
            </div>
            <div className="add-task">
                <AddTask
                    taskList={filteredList}
                    onSetTaskList={props.setTaskList}
                    onAddTask={props.handleAddTask}
                />
            </div>
            <div>
                <ToDoList
                    taskList={filteredList}
                    onDeleteTask={props.handleDeleteTask}
                    onDeleteTasks={props.handleDeleteTasks}
                    onTaskFieldChanged={props.handleTaskFieldChanged}
                    numCompleted={numCompleted}
                />
            </div>
            <div>
                <ToolBar
                    onDeleteTasks={props.handleDeleteTasks}
                    showCompleted={showCompleted}
                    onSetShowCompleted={setShowCompleted}
                    numCompleted={numCompleted}
                />
            </div>
        </div>
    );
}

export default App;
