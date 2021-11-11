import './ListMenu.css';
import React, {useState} from "react";

function ListMenu(props){
    const [currTask, setCurrTask] = useState("");

    return (
        <div>
            <div className="heading">
                <h2>Current List</h2>
            </div>
            <button className={currTask !== "" ? "add-button" : "add-button-disabled"}
                    onClick={() => {
                        if (currTask !== "") {
                            props.onAddTask(currTask);
                            setCurrTask("");
                        }
                    }}>
                Add
            </button>
        </div>
    );
}

export default ListMenu;