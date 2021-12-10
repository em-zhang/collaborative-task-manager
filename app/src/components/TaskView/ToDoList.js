import React from 'react';
import Task from "./Task";
import './ToDoList.css';

function ToDoList(props) {
    return (
        <div id="list-container">
            <div className="checklist">
                {props.taskList.length === 0 ? "No current tasks." : null}
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