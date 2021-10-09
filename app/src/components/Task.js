// import './Task.css';
import TaskField from './TaskField.js'
import InMemoryApp from "../InMemoryApp";
import {useState} from "react";

function Task(props) {
    return(
        <div className="task-container">
            <input type="checkbox"
                   checked={props.isCompleted}
                   onChange={() => {
                       console.log("checked")
                       props.handleCompleteTask(props.taskId);
                       console.log("checked id", props.taskId);
                       // props.handleTaskFieldChanged(props.taskId, field, value);
                       // props.setCurrTask(this);
                       // console.log(this);
                       // props.handleAddTask(props.currTask);
                   }}
            />
            <div className="task-label"> {props.taskLabel}</div>
            <div className="task-buttons">
                <button className="edit-button"
                    onClick={() => {
                        console.log("edit button clicked")
                        console.log("edit id", props.taskId);
                        // props.handleTaskFieldChanged(props.taskId, field, value);
                        // props.setCurrTask(this);
                        // console.log(this);
                        // props.handleAddTask(props.currTask);
                }}>
                    edit
                </button>

                <button className="delete-button"onClick={() => {
                    console.log("edit button clicked")
                    console.log("delete id", props.taskId);
                    props.handleDeleteTask(props.taskId);
                    // props.handleTaskFieldChanged(props.taskId, field, value);
                    // props.setCurrTask(this);
                    // console.log(this);
                    // props.handleAddTask(props.currTask);
                }}>
                    x
                </button>
            </div>
            {/*<div*/}
            {/*    // className={classes.join(" ")}*/}
            {/*            key={props.id}*/}
            {/*            id={props.id}*/}
            {/*            onClick={(e) => {*/}
            {/*                props.onRowClick(e.currentTarget.id);*/}
            {/*            }}*/}
            {/*>*/}
            {/*    <input type="checkbox" name="checkbox"/>*/}
            {/*    <Task/>*/}
            {/*    <TaskField field="task" {...props}/>*/}
            {/*</div>*/}
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