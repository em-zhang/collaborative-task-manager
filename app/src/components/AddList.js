import './AddList.css';
import {useState} from "react";

function AddTask(props){
    const [currList, setCurrList] = useState("");

    return (
        <div className="add-task-container">
            <input
                className="todo-input"
                id="new-todo-text"
                placeholder="Create a new list"
                value={currList}
                onChange={e => {
                    setCurrList(e.target.value);
                }}
                onKeyPress={e => {
                    if (currList !== "") {
                        if (e.key === "Enter") {
                            props.onAddList(currList);
                            setCurrList("");
                        }
                    }
                }}
            />
            <button id={currList !== "" ? "list-add-button" : "list-add-button-disabled"}
                    tabIndex = {currList != "" ? 0 : 1}
                    onClick={() => {
                        if (currList !== "") {
                            props.onAddList(currList);
                            setCurrList("");
                        }
                    }}>
                Add
            </button>
        </div>
    );
}

export default AddTask;