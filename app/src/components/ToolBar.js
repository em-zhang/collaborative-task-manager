import Alert from "../components/Alert"
import SortMenu from "../components/SortMenu"
import React, {useState} from "react";
import './ToolBar.css';

function ToolBar(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [showSortMenu, setSortMenu] = useState(false);

    function handleSortByName() {
        props.onSortSelected("taskLabel");
    }

    function handleSortByPriority() {
        props.onSortSelected("priority");
    }

    function handleSortByCreationDate() {
        props.onSortSelected("dateCreated");
    }

    function describeSortOption() {
        let sortOptionText = "Date Created";
        if (props.sortOption === "dateCreated"){
            sortOptionText = "Date Created";
        }
        else if (props.sortOption === "priority"){
            sortOptionText = "Priority";
        }
        else if (props.sortOption === "taskLabel"){
            sortOptionText = "Name";
        }
        return sortOptionText;
    }

    function handleAlertOK() {
        props.onDeleteTasks();
    }

    function toggleModal() {
        showAlert ? setShowAlert(false) : setShowAlert(true)
    }

    function toggleSortModal() {
        showSortMenu ? setSortMenu(false) : setSortMenu(true)
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
                    <div className="sort-modal-message">
                        Tasks are currently sorted by <b>{describeSortOption()}</b>.
                        <br/>
                        <br/>
                        Sort by:
                    </div>
                </SortMenu>}
                <button
                    className="toolbar-button"
                    id="hide-button"
                    onClick={() => {toggleShowCompleted()}}>
                    <i id="hide-icon"
                       className={props.showCompleted ? "las la-eye-slash": "las la-eye"}>
                    </i>
                    <br/>
                    {props.showCompleted ? "Hide Completed" : "Show All"}
                </button>
                <button
                    className="toolbar-button"
                    id={props.numCompleted !== 0 ? "delete-button" : "delete-completed-button-hidden"}
                    // onKeyPress={e => {
                    //     if (e.key === "Enter") {
                    //         document.getElementById('alert-ok').focus();
                    //     }
                    // }}
                    onClick={props.numCompleted !== 0 ? toggleModal : null}>

                    <i id="delete-icon" className="las la-trash">
                    </i>
                    <br/>
                    Delete Completed
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