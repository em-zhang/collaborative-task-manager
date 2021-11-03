import Alert from "../components/Alert"
import SortMenu from "../components/SortMenu"
import React, {useState} from "react";
import './ToolBar.css';

function ToolBar(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [showSortMenu, setSortMenu] = useState(false);

    function handleSortByName() {
        // props.onDeleteTasks();
    }

    function handleSortByPriority() {
        // props.onDeleteTasks();
    }

    function handleSortByCreationDate() {
        // props.onDeleteTasks();
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
                <button className="toolbar-button"
                    onClick={toggleSortModal}>
                    Sort Tasks</button>
                {showSortMenu && <SortMenu className="toolbar-button"
                          onClose={toggleSortModal}
                          onSortByName={handleSortByName}
                          onSortByPriority={handleSortByPriority}
                          onSortByCreationDate={handleSortByCreationDate}>
                    <div>
                        What do you want to sort by?
                    </div>
                </SortMenu>}
                <button
                    className="toolbar-button"
                    id="hide-button"
                    onClick={() => {toggleShowCompleted()}}>
                    {props.showCompleted ? "Hide Completed" : "Show All"}
                </button>
                <button
                    className="toolbar-button"
                    // only make button fully visible and support functionality if there are completed tasks
                    id={props.numCompleted !== 0 ? null : "delete-completed-button-hidden"}
                    onClick={props.numCompleted !== 0 ? toggleModal : null}>
                    Delete Completed</button>
            </div>
            {showAlert && <Alert onClose={toggleModal} onOK={handleAlertOK}>
                <div>
                    Are you sure you want to delete all completed tasks?
                </div>
            </Alert>}
        </div>
    );
}

export default ToolBar;