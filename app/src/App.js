import './App.css';
import './index.js';
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import ToolBar from "./components/ToolBar"
import React, {useState, useEffect} from "react";

function App(props) {
    const[showCompleted, setShowCompleted] = useState(true);
    const filteredList = props.taskList.filter(task => showCompleted || !task.isCompleted);
    const numCompleted = props.taskList.filter(task => task.isCompleted == true).length;
    return (
        <div className="app-container">
            <div class="heading">
                <h1>Task Manager</h1>
            </div>
            <div className="add-task">
                <AddTask
                    taskList={filteredList}
                    setTaskList={props.setTaskList}
                    handleAddTask={props.handleAddTask}
                />
            </div>
            <div>
                <ToDoList
                    taskList={filteredList}
                    handleDeleteTask={props.handleDeleteTask}
                    handleDeleteTasks = {props.handleDeleteTasks}
                    handleTaskFieldChanged={props.handleTaskFieldChanged}
                    numCompleted={numCompleted}
                />
            </div>
            <div>
                <ToolBar
                    handleDeleteTasks = {props.handleDeleteTasks}
                    showCompleted = {showCompleted}
                    setShowCompleted = {setShowCompleted}
                    numCompleted={numCompleted}
                />
            </div>
        </div>
    );
}

export default App;
