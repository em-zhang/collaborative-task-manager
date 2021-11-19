import TextareaAutosize from 'react-textarea-autosize';
import './Task.css';
import {useState} from "react";

function Task(props) {
    return (
        <div className="task-container">
            <input type="checkbox"
                   className="checkbox"
                   checked={props.isCompleted}
                   onChange={(e) => {
                       props.onTaskFieldChanged(props.taskId, "isCompleted", e.target.checked)
                   }}

                   onKeyPress={e => {
                       if (e.key === "Enter") {
                           props.onTaskFieldChanged(props.taskId, "isCompleted", !props.isCompleted)
                       }
                   }}
            />
            <TextareaAutosize
                id= {!props.isCompleted ? "task-label" : "task-label-strikethrough"}
                value={props.taskLabel}
                onChange={(e) => {
                    props.onTaskFieldChanged(props.taskId, "taskLabel", e.target.value)
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        document.getElementById('task-label').blur();
                        document.getElementById('task-label-strikethrough').blur();
                    }
                }}
                // don't allow user to edit a task if it's been marked completed
                disabled={props.isCompleted}
            />
            <div className="priority-button-container">
                <button className="priority-button"
                        id={props.priority === 3 ? "high" : props.priority === 2 ? "medium" : "low"}
                        aria-label= {(props.priority === 3 ? "high" : props.priority === 2 ? "medium" : "low") + " priority"}
                        onClick={() => {
                            props.onChangePriority(props.taskId, props.priority);
                        }}>
                    {"!".repeat(props.priority)}
                </button>
            </div>
            <div>
                <button
                    className="delete-button"
                    aria-label="delete"
                        onClick={() => {
                            props.onDeleteTask(props.taskId);
                        }}>
                    X
                </button>

            </div>
        </div>
    )
}

export default Task;