import './App.css';
import './index.js';
import ListMenu from "./components/ListView/ListMenu"
import AddList from "./components/ListView/AddList"
import ToDoList from "./components/TaskView/ToDoList"
import AddTask from "./components/TaskView/AddTask"
import ToolBar from "./components/TaskView/ToolBar"
import ShareModal from "./components/TaskView/ShareModal";
import SharedLists from "./components/ListView/SharedLists";
import TabList from "./components/TabList";
import React, {useState} from "react";
import SortMenu from "./components/TaskView/SortMenu";

function App(props) {
    const[showCompleted, setShowCompleted] = useState(true);
    const filteredList = props.taskList.filter(task => showCompleted || !task.isCompleted);
    const listsIOwn = props.listData.filter(list => list.owner === props.user.email);
    const listsSharedWithMe = props.listData.filter(list => list.owner !== props.user.email);

    const numCompleted = props.taskList.filter(task => task.isCompleted).length;
    const[homepage, showHomepage] = useState(true);
    const [showShareModal, setShowShareModal] = useState(false);

    function toggleShareModal() {
        setShowShareModal(!showShareModal)
    }

    console.log("user email is ", props.user.email, "lists data is ", props.listData)
    console.log("owner is ", props.owner, "lists i own is ", listsIOwn)
    console.log("lists shared with me ", listsSharedWithMe)

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
                </div>
                <TabList classname="tabs">
                    <ListMenu
                        key="My Lists"
                        className="taskList"
                        isOwner={props.isOwner}
                        listData={listsIOwn}
                        currListID={props.currListID}
                        currListName={props.currListName}
                        onListSelected={props.handleListSelected}
                        showHomepage={showHomepage}
                        onAddList={props.handleAddList}
                        onDeleteList={props.handleDeleteList}
                        onListFieldChanged={props.handleListFieldChanged}>
                    </ListMenu>
                    <SharedLists
                        key="Shared With Me"
                        className="taskList"
                        isOwner={props.isOwner}
                        sharedListData={listsSharedWithMe}
                        currListID={props.currListID}
                        currListName={props.currListName}
                        onListSelected={props.handleListSelected}
                        showHomepage={showHomepage}
                        onDeleteList={props.handleDeleteList}
                        onListFieldChanged={props.handleListFieldChanged}>
                    </SharedLists>
                </TabList>

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
                        <button id="share-button"
                                aria-label="Share Button"
                                onClick={toggleShareModal}>
                            <i className="las la-user-plus">
                            </i>
                        </button>
                        {showShareModal &&
                        <ShareModal
                            onClose={toggleShareModal}
                            currListID={props.currListID}
                            owner={props.owner}
                            user={props.user}
                            editors={props.editors}
                            onAddEditor={props.handleAddEditor}
                            onDeleteEditor={props.handleDeleteEditor}
                        >
                        </ShareModal>}
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
