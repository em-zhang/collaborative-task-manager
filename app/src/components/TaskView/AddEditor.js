import './AddTask.css';
import {useState} from "react";

function AddEditor(props){
    const [currEditor, setCurrEditor] = useState("");

    return (
        <div className="add-editor-container">
            <input
                className="todo-input"
                type="email"
                id="new-todo-text"
                placeholder="Add a New Editor"
                value={currEditor}
                onChange={e => {
                    setCurrEditor(e.target.value);
                }}
                onKeyPress={e => {
                    if (currEditor !== "") {
                        if (e.key === "Enter") {
                            props.onAddEditor(currEditor);
                            setCurrEditor("");
                        }
                    }
                }}
            />
            <button className={currEditor !== "" ? "add-button" : "add-button-disabled"}
                    tabIndex = {currEditor !== "" ? 0 : 1}
                    onClick={() => {
                        if (currEditor !== "") {
                            props.onAddEditor(currEditor);
                            setCurrEditor("");
                        }
                    }}>
                Add
            </button>
        </div>
    );
}

export default AddEditor;