import React, {useState} from 'react';
import Task from "./Task";
import './ToDoList.css';

function ToDoList(props) {
    const [selectedId, setSelectedId] = useState(null);
    let numCompleted = props.taskList.filter(task => task.isCompleted == true).length;

    return (
        <div className="checklist-container">
            <div className="my-tasks">
                <h2>My Tasks ({numCompleted}/{props.taskList.length} completed)
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