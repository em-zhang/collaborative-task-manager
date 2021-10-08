import React, {useState} from 'react';
import Task from "./Task";

function ToDoList(props) {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <div>
            <div className="my-tasks">
                <h2>My Tasks ({selectedId === null ? 0 : 1}/{props.taskList.length} selected)</h2>
            </div>
            <div class="checklist">
                {props.taskList.map(task =>
                <Task
                    taskLabel = {task.taskLabel}
                    isSelected = {task.isSelected}
                    isCompleted = {task.isCompleted}
                />)}
            </div>
            <div className="tasks-remaining-message">
                {`${props.taskList.length} Remaining Tasks`}
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