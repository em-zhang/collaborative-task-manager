// import logo from './logo.svg';
import './App.css';
import './index.js';
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import InMemoryApp from "./InMemoryApp"
import {useState, useEffect} from "react";

function App(props) {
    return (
        <div className="App">
            <div class="heading">
                <h1>- Task Manager -</h1>
            </div>
            <div class="my-tasks-container">
                <h2>My Tasks</h2>
            </div>
            <div class="add-task-container">
                <AddTask
                        // data={props.data}
                        //  onChange={props.handleAddTask}
                        taskList={props.taskList}
                        setTaskList={props.setTaskList}
                        currTask={props.currTask}
                        setCurrTask={props.setCurrTask}
                        handleAddTask={props.handleAddTask}
                />
            </div>
            <div class="todo-list">
                <ToDoList data={props.data}
                          taskList={props.taskList}
                          setTaskList={props.setTaskList}
                          onDeleteTask={props.handleDeleteTask}
                          onAddTask={props.handleAddTask}
                          onTaskFieldChanged={props.onTaskFieldChanged}
                          handleCompleteTask={props.handleCompleteTask}
                />

            </div>
        </div>
    );
}

export default App;
