import './normalize.css';
import './App.css';
import './index.js';
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import ToolBar from "./components/ToolBar"
import ListMenu from "./components/ListMenu";
import React, {useState} from "react";

function App(props) {
    const[showCompleted, setShowCompleted] = useState(true);
    const filteredList = props.taskList.filter(task => showCompleted || !task.isCompleted);
    const numCompleted = props.taskList.filter(task => task.isCompleted).length;

    return (
        <div id="app-container">
            <div className="heading">
                <button className="toolbar-button">
                    <i id="home-icon" className="las la-trash"></i>
                    Home</button>
                <h1>Task Manager</h1>
            </div>
            <div className="list-name">
                <h2>Current List</h2>
            </div>
            {/*<div className="listMenuBar">*/}
            {/*    <div className="list-menu">*/}
            {/*        <ListMenu*/}
            {/*            taskList={filteredList}*/}
            {/*            onSetTaskList={props.setTaskList}*/}
            {/*            // onAddList={props.handleAddList}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="topButtonBar">
                <div className="add-task">
                <AddTask
                    taskList={filteredList}
                    onSetTaskList={props.setTaskList}
                    onAddTask={props.handleAddTask}
                />
                </div>
            </div>
            <div className="taskList">
                <ToDoList
                    taskList={filteredList}
                    onDeleteTask={props.handleDeleteTask}
                    onChangePriority={props.handleChangePriority}
                    onDeleteTasks={props.handleDeleteTasks}
                    onTaskFieldChanged={props.handleTaskFieldChanged}
                    numCompleted={numCompleted}
                />
            </div>
            <div className="bottomBar">
                <ToolBar
                    onDeleteTasks={props.handleDeleteTasks}
                    showCompleted={showCompleted}
                    onSetShowCompleted={setShowCompleted}
                    numCompleted={numCompleted}
                    onSortSelected={props.handleSortSelected}
                    sortOption={props.sortOption}
                />
            </div>
        </div>
    );
}

export default App;
