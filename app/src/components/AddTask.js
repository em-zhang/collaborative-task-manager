import './AddTask.css';
import {useState} from "react";

function AddList(props){
    const [currTask, setCurrTask] = useState("");

    return (
        <div className="add-task-container">
            <input
                className="todo-input"
                id="new-todo-text"
                placeholder="Create a new task"
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

export default AddList;