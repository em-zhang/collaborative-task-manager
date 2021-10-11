import TextareaAutosize from 'react-textarea-autosize';
import './Task.css';

function Task(props) {
    return(
        <div className="task-container">
            <input type="checkbox" className="checkbox"
                   checked={props.isCompleted}
                   onChange={(e) => {
                        props.handleTaskFieldChanged(props.taskId, "isCompleted", e.target.checked)
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
                    props.handleDeleteTask(props.taskId);
                }}>
                    x
                </button>
            </div>
        </div>
    )
}
export default Task;