import './AddTask.css';
import {useState} from "react";

function AddTask(props){
    const [currTask, setCurrTask] = useState("");

    return (
        <div>
            <input
                className="todo-input"
                id="new-todo-text"
                placeholder="Enter task here"
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
                    onClick={() => {
                        if (currTask !== "") {
                            props.onAddTask(currTask);
                            setCurrTask("");
                        }
                    }}>
                +
            </button>
        </div>
    );
}

export default AddTask;