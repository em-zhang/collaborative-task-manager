import Alert from "../components/Alert"
import React, {useState} from "react";
import './ToolBar.css';

function ToolBar(props) {
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOK() {
        props.handleDeleteTasks();
    }

    function toggleModal() {
        showAlert ? setShowAlert(false) : setShowAlert(true)
    }

    return (
        <div>
            <div className="toolbar">
                <button
                    className="toolbar-button"
                    id="hide-button"
                    onClick={() => {
                        props.setShowCompleted(!props.showCompleted)
                    }}>
                    {props.showCompleted ? "Hide Completed" : "Show All Tasks"}
                </button>
                <button
                    className="toolbar-button"
                    // only make button fully visible and support functionality if there are completed tasks
                    id={props.numCompleted !== 0 ? null : "delete-completed-button-hidden"}
                    onClick={() => {
                        if(props.numCompleted !== 0) {
                            toggleModal();
                        }
                    }}>
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