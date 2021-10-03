import React, { useState } from "react";
import TodosComponent from "./ToDoList";

import initialDataList from "../index.js";

function AddToDoComponent() {

}

// function AddToDoComponent() {
//     const [currTask, setCurrTask] = useState("");
//     const [currentTodo, setCurrentTodo] = useState("");
//     return (
//         <div>
//             <input
//                 className="todo-input"
//                 placeholder="Add a task"
//                 value={currTask}
//                 onChange={e => {
//                     setCurrTask(e.target.value);
//                 }}
//                 // also need to support functionality for button
//                 onKeyPress={e => {
//                     if (e.key === "Enter") {
//                         TodosComponent.createTask(currTask);
//                         setCurrTask("");
//                     }
//                 }}
//             />
//             {TodosComponent.todoList.map((todo, index) => (
//                 <div key={todo} className="todo">
//                     <div className="checkbox" onClick={() => TodosComponent.completeTask(index)}>
//                         {todo.completed && <span>&#x2714;</span>}
//                     </div>
//                     <div className={todo.completed ? "done" : ""}>{todo.todo}</div>
//                 </div>
//             ))}
//             <div className="tasks-remaining-message">
//                 {/*Show number of tasks*/}
//                 {TodosComponent.todoList.length > 0 && `${TodosComponent.todoList.length} remaining tasks`}
//             </div>
//         </div>
//     );
// }

export default AddToDoComponent;