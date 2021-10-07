// import './Task.css';
import TaskField from './TaskField.js'

function Task(props) {
    const classes = ["task "];
    if (props.selected) {
        classes.push("selected");
    }

    return <div className={classes.join(" ")}
                key={props.id}
                id={props.id}
                onClick={(e) => {
                    props.onRowClick(e.currentTarget.id);
                }}
    >
        <TaskField field="task" {...props}/>
        {/*<TaskField field="completed" {...props}/>*/}
    </div>
}
export default Task;