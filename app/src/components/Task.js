// import './Task.css';
import TaskField from './TaskField.js'
import TextareaAutosize from 'react-textarea-autosize';
import './Task.css';

function Task(props) {
    return(
        <div className="task-container">
            <input type="checkbox" className="checkbox"
                   checked={props.isCompleted}
                   onChange={() => {
                       console.log("checked ", props.taskId, props.isCompleted, "change to ", !props.isCompleted)
                        props.handleTaskFieldChanged(props.taskId, "isCompleted", !props.isCompleted)
                   }}
            />
            <TextareaAutosize className="task-label"
                value = {props.taskLabel}
                onChange={(e) =>
                    props.handleTaskFieldChanged(props.taskId, "taskLabel", e.target.value)
                }
                disabled={props.isCompleted}
            />
            <div className="task-buttons">
                <button className="delete-button"onClick={() => {
                    console.log("edit button clicked")
                    console.log("delete id", props.taskId);
                    props.handleDeleteTask(props.taskId);
                }}>
                    x
                </button>
            </div>
        </div>
    )
}
export default Task;