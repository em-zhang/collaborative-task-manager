import React, {useState} from 'react';
import Task from "./Task";

function ToDoList(props) {
    const [selectedId, setSelectedId] = useState(null);
    const s = "" + props.taskList.map(task => task.isCompleted === false ? "n" : "y");
    const numChecked = s.split("y").length - 1;

    return (
        <div class="checklist-container">
            <div className="my-tasks">
                {/*how to make this work?*/}
                <h2>My Tasks ({numChecked}/{props.taskList.length} completed)

                </h2>
            </div>
            <div class="checklist">
                {/*{props.taskList.map(task =>*/}
                {/*<Task*/}
                {/*    handleDeleteTask = {props.handleDeleteTask}*/}
                {/*    handleTaskFieldChanged = {props.handleTaskFieldChanged}*/}
                {/*    handleCompleteTask={props.handleCompleteTask}*/}
                {/*    taskId = {task.taskId}*/}
                {/*    taskLabel = {task.taskLabel}*/}
                {/*    isSelected = {task.isSelected}*/}
                {/*    isCompleted = {task.isCompleted}*/}
                {/*/>)}*/}
                {props.taskList.map(a => <Task
                    onRowClick={(id) =>
                        selectedId(id)}
                    onTaskFieldChanged={props.onTaskFieldChanged}
                    isSelected={a.id === selectedId}
                    key={a.id}
                    {...a} />)}
                {selectedId && <button type="button" onClick={
                    () => {
                        props.onTaskFieldChanged(selectedId);
                    }}>
                    Edit Selected
                </button>}
            </div>

        </div>);
}
//     const [selectedId, setSelectedId] = useState(null);
//     return (
//         <div>
//             {props.taskList.map((todo, index) => (
//                 <div key={todo} className="todo">
//                     <label>
//                         <input type="checkbox" name="checkbox"/>
//                         <span>{todo.task}</span>
//                     </label>
//                 </div>
//             ))}
//             <div className="tasks-remaining-message">
//                 {/*Show number of tasks*/}
//                 {`${props.taskList.length} Remaining Tasks`}
//             </div>
//         </div>
//     );
// }
        // <div>
        //     <h1>ToDoList ({selectedId === null ? 0 : 1}/{props.list.length} selected)</h1>
        //     {props.list.map(a => <Task
        //         onRowClick={(id) =>
        //             setSelectedId(id)}
        //         onTaskFieldChanged={props.onTaskFieldChanged}
        //         selected={a.id === selectedId}
        //         key={a.id}
        //         {...a} />)}
        //     {selectedId && <button type="button" onClick={
        //         () => {
        //             props.onDeleteTask(selectedId);
        //             setSelectedId(null);
        //         }}>
        //         Delete Selected
        //     </button>}
        //     <button type="button" onClick={props.onAddTask}>
        //         Add
        //     </button>
        // </div>);


export default ToDoList;