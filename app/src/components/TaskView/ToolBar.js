import Alert from "./Alert"
import SortMenu from "./SortMenu"
import React, {useState} from "react";
import './ToolBar.css';

function ToolBar(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [showSortMenu, setShowSortMenu] = useState(false);

    function handleSortByName() {
        props.onSortSelected("taskLabel");
    }

    function handleSortByPriority() {
        props.onSortSelected("priority");
    }

    function handleSortByCreationDate() {
        props.onSortSelected("dateCreated");
    }

    function handleAlertOK() {
        props.onDeleteTasks();
    }

    function toggleModal() {
        setShowAlert(!showAlert)
    }

    function toggleSortModal() {
        setShowSortMenu(!showSortMenu)
    }

    function toggleShowCompleted() {
        props.showCompleted ? props.onSetShowCompleted(false) : props.onSetShowCompleted(true)
    }

    return (
        <div>
            <div className="toolbar">
                <button
                    id="sort-button"
                    className="toolbar-button"
                    onClick={toggleSortModal}>
                    <i id="sort-icon" className="las la-sort-amount-down"></i>
                    <br/>
                    Sort
                </button>
                {showSortMenu &&
                <SortMenu className="toolbar-button"
                          sortOption={props.sortOption}
                          onClose={toggleSortModal}
                          onSortByName={handleSortByName}
                          onSortByPriority={handleSortByPriority}
                          onSortByCreationDate={handleSortByCreationDate}>
                </SortMenu>}
                <button
                    className="toolbar-button"
                    id="hide-button"
                    onClick={() => {
                        toggleShowCompleted()
                    }}>
                    <i id="hide-icon"
                       className={props.showCompleted ? "las la-eye-slash" : "las la-eye"}>
                    </i>
                    <br/>
                    {props.showCompleted ? "Hide Completed" : "Show All"}
                </button>
                <button
                    className="toolbar-button"
                    id={props.numCompleted !== 0 ? "delete-button" : "delete-completed-button-hidden"}
                    disabled={props.numCompleted === 0}
                    onClick={toggleModal}
                >
                    <i id="delete-icon" className="las la-trash">
                    </i>
                    <br/>
                    Delete Completed
                </button>
                <button className="toolbar-button"
                        id="share-button-tb"
                        aria-label="Share Button"
                    // onClick={toggleShareModal}>
                >
                    <i id="share-icon" className="las la-user-plus">
                    </i>
                    <br/>
                    Share
                </button>
            </div>
            {showAlert && <Alert onClose={toggleModal} onOK={handleAlertOK}>
                <div>
                    Are you sure you want to delete all {props.numCompleted} completed tasks?
                </div>
            </Alert>}
        </div>
    );
}

export default ToolBar;