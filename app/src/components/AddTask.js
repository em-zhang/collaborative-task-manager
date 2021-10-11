import './AddTask.css';
import {useState} from "react";

function AddTask(props){
    const [currTask, setCurrTask] = useState("");

    return (
        <div>
            <input
                className="todo-input"
                id="add-button-text"
                placeholder="Enter task here"
                value={currTask}
                onChange={e => {
                    setCurrTask(e.target.value);
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        props.handleAddTask(currTask);
                        setCurrTask("");
                    }
                }}
            />
            <button className="todo-input add-button"
                    onClick={() => {
                        props.handleAddTask(currTask);
                        setCurrTask("");
                    }}>
                Add Task
            </button>
        </div>
    );
}

export default AddTask;