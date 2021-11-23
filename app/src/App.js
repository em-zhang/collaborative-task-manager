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
    const[homepage, showHomepage] = useState(true);

    return (
        homepage
            ?
            <div className="app-container">
                <div className="heading">
                    <h1>
                        <div
                            aria-label="Task Manager"
                            className="title">
                            Task Manager
                        </div>
                    </h1>
                    <div className="header">
                        <h2>All Lists</h2>
                    </div>
                </div>
                <div className="top-button-bar">
                    <div className="add-task">
                        <AddList
                            onAddList={props.handleAddList}
                            onListSelected={props.handleListSelected}
                        />
                    </div>
                </div>
                <div className="taskList">
                    <ListMenu
                        listData={props.listData}
                        currListID={props.currListID}
                        currListName={props.currListName}
                        onListSelected={props.handleListSelected}
                        showHomepage={showHomepage}
                        onDeleteList={props.handleDeleteList}
                        onListFieldChanged={props.handleListFieldChanged}
                    />
                </div>
            </div>
            :
            <div className="app-container">
                <div className="heading">
                    <h1>
                        <button id="home-button"
                                aria-label="Home Button"
                                onClick={() => {
                                    showHomepage(true);
                                }}>
                            <i className="las la-angle-left">
                            </i>
                        </button>
                        <div className="title">
                             Task Manager
                        </div>
                    </h1>
                    <div>
                        <h2>{props.currListName}</h2>
                    </div>
                </div>
                <div className="top-button-bar">
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
