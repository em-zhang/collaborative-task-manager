// import './Task.css';
import TaskField from './TaskField.js'

function Task(props) {
    return(
        <div className="task-container">
            <input type="checkbox" checked={props.isCompleted}/>
            <div className="task-label"> {props.taskLabel}</div>
            <div className="task-buttons">
                <button className="deleteButton"> X</button>
            </div>
        </div>
    )
    // const classes = ["task "];
    // if (props.selected) {
    //     classes.push("selected");
    // }
    //
    // return <div className={classes.join(" ")}
    //             key={props.id}
    //             id={props.id}
    //             onClick={(e) => {
    //                 props.onRowClick(e.currentTarget.id);
    //             }}
    // >
    //     <input type="checkbox" name="checkbox"/>
    //     {/*<Task/>*/}
    //     <TaskField field="task" {...props}/>
    // </div>
}
export default Task;