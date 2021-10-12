import React from 'react';
import Task from "./Task";
import './ToDoList.css';

function ToDoList(props) {

    return (
        <div className = "list-container">
            <div className="my-tasks">
                <h2>My Tasks ({props.numCompleted}/{props.taskList.length} completed)
                </h2>
            </div>
            <div className="checklist">
                {props.taskList.map(task =>
                <Task
                    key={task.taskId}
                    handleDeleteTask={props.handleDeleteTask}
                    handleTaskFieldChanged={props.handleTaskFieldChanged}
                    {...task}
                />)}
            </div>
        </div>);
}

export default ToDoList;