import React from 'react';
import Task from "./Task";
import './ToDoList.css';

function ToDoList(props) {
    return (
        <div id="list-container">
            {/*<div className="my-tasks">*/}
            {/*    <h2>My Tasks </h2>*/}
            {/*</div>*/}
            <div className="no-tasks-message">
                <h3>{props.taskList.length ? "" : "No current tasks." }</h3>
            </div>
            <div className="checklist">
                {props.taskList.map(task =>
                    <Task {...task}
                          key={task.taskId}
                          onDeleteTask={props.onDeleteTask}
                          onTaskFieldChanged={props.onTaskFieldChanged}
                          onChangePriority={props.onChangePriority}
                    />)}
            </div>
        </div>);
}

export default ToDoList;