import {useState} from 'react';
import './Editor.css';
import SelectionMaintainingInput from "../SelectionMaintainingInput";

function Editor(props) {

    return (
        <div className="task-container">
            <SelectionMaintainingInput
                id="editor-label"
                value={props.editor}
                // onBlur={(e) =>
                //     props.onTaskFieldChanged(props.taskId, "taskLabel", itemName)
                // }
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        if (document.getElementById('task-label')){
                            e.preventDefault();
                            document.getElementById('task-label').blur();
                        }
                    }
                }}
                // don't allow user to edit a task if it's been marked completed
                disabled={props.isCompleted}
            />

            <div>
                <button
                    className="delete-list-button"
                    aria-label="delete"
                    // onClick={() => {
                    //     props.onDeleteTask(props.taskId);
                    // }}
                >
                    X
                </button>

            </div>
        </div>
    )
}

export default Editor;