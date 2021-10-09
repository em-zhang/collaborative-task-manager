import InMemoryApp from "../InMemoryApp";
import React, {useState} from "react";


function ToolBar(props) {
    // let [hideButton, setHideButton] = useState(false)

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
                    props.handleDeleteTasks();
                }}> Delete Completed</button>
            </div>
        </div>
    );
}

export default ToolBar;