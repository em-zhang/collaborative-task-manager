import TextareaAutosize from 'react-textarea-autosize';
import './Task.css';

function Task(props) {
    return(
        <div className="task-container">
            <input type="checkbox"
                   className="checkbox"
                   checked={props.isCompleted}
                   onChange={(e) => {
                        props.handleTaskFieldChanged(props.taskId, "isCompleted", e.target.checked)
                   }}
            />
            <TextareaAutosize
                className="task-label"
                value={props.taskLabel}
                onChange={(e) =>
                    props.handleTaskFieldChanged(props.taskId, "taskLabel", e.target.value)
                }
                // don't allow user to edit a task if it's been marked completed
                disabled={props.isCompleted}
            />
            <div>
                <button className="delete-button"
                        onClick={() => {
                            props.handleDeleteTask(props.taskId);
                        }}>
                    X
                </button>
            </div>
        </div>
    )
}
export default Task;