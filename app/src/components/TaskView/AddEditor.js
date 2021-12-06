import './AddTask.css';
import {useState} from "react";

function AddEditor(props){
    const [currTask, setCurrTask] = useState("");

    return (
        <div className="add-editor-container">
            <input
                className="todo-input"
                id="new-todo-text"
                placeholder="Add a New Editor"
                value={currTask}
                onChange={e => {
                    setCurrTask(e.target.value);
                }}
                onKeyPress={e => {
                    if (currTask !== "") {
                        if (e.key === "Enter") {
                            props.onAddTask(currTask);
                            setCurrTask("");
                        }
                    }
                }}
            />
            <button className={currTask !== "" ? "add-button" : "add-button-disabled"}
                    tabIndex = {currTask !== "" ? 0 : 1}
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

export default AddEditor;