import './App.css';
import './index.js';
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import ToolBar from "./components/ToolBar"
import React, {useState, useEffect} from "react";

function App(props) {
    const[showCompleted, setShowCompleted] = useState(true);
    const filteredList = props.taskList.filter(task => showCompleted || !task.isCompleted);
    console.log(filteredList);
    return (
        <div className="App">
            <div class="heading">
                <h1>Task Manager</h1>
            </div>
            <div class="add-task">
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
                />
            </div>
            <div>
                <ToolBar
                    handleDeleteTasks = {props.handleDeleteTasks}
                    showCompleted = {showCompleted}
                    setShowCompleted = {setShowCompleted}
                />
            </div>
        </div>
    );
}

export default App;
