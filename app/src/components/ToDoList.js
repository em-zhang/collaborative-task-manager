import React from 'react';
import Task from "./Task";
import './ToDoList.css';

function ToDoList(props) {
    return (
        <div id="list-container">
            <div className="my-tasks">
                <h2>My Tasks ({props.numCompleted}/{props.taskList.length} completed)</h2>
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