// import logo from './logo.svg';
import './App.css';
import './index.js';
import Alert from "./components/Alert"
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import ToolBar from "./components/ToolBar"
import InMemoryApp from "./InMemoryApp"
import React, {useState, useEffect} from "react";

function App(props) {
    return (
        <div className="App">
            <div class="heading">
                <h1>- Task Manager -</h1>
            </div>
            <div class="add-task">
                <AddTask
                    taskList={props.taskList}
                    setTaskList={props.setTaskList}
                    currTask={props.currTask}
                    setCurrTask={props.setCurrTask}
                    handleAddTask={props.handleAddTask}
                />
            </div>
            <div>
                <ToDoList data={props.data}
                              taskList={props.taskList}
                              setTaskList={props.setTaskList}
                              handleCompleteTask={props.handleCompleteTask}
                              handleDeleteTask={props.handleDeleteTask}
                              handleHideTasks = {props.handleHideTasks}
                              handleShowTasks = {props.handleShowTasks}
                              onAddTask={props.handleAddTask}
                              handleDeleteTasks = {props.handleDeleteTasks}
                              handleTaskFieldChanged={props.handleTaskFieldChanged}
                />
            </div>
            <div>
                <ToolBar
                    handleHideTasks = {props.handleHideTasks}
                    handleShowTasks = {props.handleShowTasks}
                    handleDeleteTasks = {props.handleDeleteTasks}
                />
            </div>
        </div>
    );
}

export default App;
