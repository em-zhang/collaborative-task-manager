import './App.css';
import './index.js';
import ListMenu from "./components/ListMenu"
import AddList from "./components/AddList"

import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import ToolBar from "./components/ToolBar"
import React, {useState} from "react";

function App(props) {
    const[showCompleted, setShowCompleted] = useState(true);
    const filteredList = props.taskList.filter(task => showCompleted || !task.isCompleted);
    const numCompleted = props.taskList.filter(task => task.isCompleted).length;
    const[homePage, showHomePage] = useState(true);

    console.log("lists are ", props.listData)

    return (
        homePage
            ?
            <div id="homepage">
                <div className="homepage-heading">
                    <h1>Task Manager</h1>
                </div>
                <div className="add-list">
                    <AddList
                        onAddList={props.handleAddList}
                        onListSelected={props.handleListSelected}
                    />
                </div>
                <div className="list-menu">
                    <ListMenu
                        listData={props.listData}
                        currListID={props.currListID}
                        currListName={props.currListName}
                        onListSelected={props.handleListSelected}
                        homepage={homePage}
                        showHomepage={showHomePage}
                    />
                </div>
            </div>
            :
            <div id="app-container">
                <div className="heading">
                    <h1>Task Manager</h1>
                </div>
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
