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
            />
            <TextareaAutosize
                className="task-label"
                value={props.taskLabel}
                onChange={(e) => {
                    console.log("editing task with taskId ", props.taskId)
                    props.onTaskFieldChanged(props.taskId, "taskLabel", e.target.value)
                }}
                // don't allow user to edit a task if it's been marked completed
                disabled={props.isCompleted}
            />
            <div>
                <button className="priority-button"
                        id={props.priority === 3 ? "high" : props.priority === 2 ? "medium" : "low"}
                        onClick={() => {
                            console.log("Priority is", props.priority);
                            props.onChangePriority(props.taskId, props.priority);
                        }}>
                    {"!".repeat(props.priority)}
                </button>
            </div>
            <div>
                <button className="delete-button"
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