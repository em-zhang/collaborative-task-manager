import InMemoryApp from "../InMemoryApp";
import Alert from "../components/Alert"
import React, {useState} from "react";


function ToolBar(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [deleteTasks, setDeleteTasks] = useState(false);
    // let [hideButton, setHideButton] = useState(false)

    function handleAlertOK() {
        props.handleDeleteTasks();
    }

    function toggleModal() {
        showAlert ? setShowAlert(false) : setShowAlert(true)
    }

    return (
        <div>
            <div className="toolbar">
                <button className="toolbar-button"
                        onClick={() => {
                            console.log("hide button clicked")
                            // if (hideButton == true) {
                            //     setHideButton(hideButton = false)
                            // } else {
                            //     setHideButton(hideButton = true);
                            // }
                            props.handleHideTasks();
                        }}
                > Show Uncompleted
                </button>
                <button className="toolbar-button" onClick={() => {
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