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
                <button className="toolbar-button" id={"hide-button"}
                        onClick={() => {
                            console.log("hide button clicked")
                            props.setShowCompleted(!props.showCompleted)
                            console.log("show completed is", props.showCompleted)
                            // handleHideTasksButton();
                        }}
                > {props.showCompleted ? "Show Completed" : "Show All Tasks"}
                </button>
                <button className="toolbar-button" id="delete-completed-button" onClick={() => {
                    console.log("delete completed button clicked")
                    toggleModal()
                }}> Delete Completed</button>
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