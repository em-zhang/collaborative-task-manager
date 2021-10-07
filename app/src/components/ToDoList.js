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
                {props.taskList.map(task=>(
                    <div className="task-container">
                        <input type="checkbox" name="checkbox"/>
                        <label>{task.task}</label>
                        <div className = "task-buttons">
                            <button className="button edit">
                                Edit
                                {/*onClick={(edit)=>props.handleEditTask(edit.target.value,task.key)}><i className="glyphicon glyphicon-pencil"/>*/}
                            </button>
                            <button className="button delete">
                                Delete
                                {/*// onClick={()=> props.handleDeleteTask(task.key)}><i className="fa fa-trash"/>*/}
                            </button>
                        </div>
                    </div>
                ))}
                {/*{props.taskList.map(t =>*/}
                {/*    <label>*/}
                {/*        <Task*/}
                {/*            // onRowClick={(id) =>*/}
                {/*            //     setSelectedId(id)}*/}
                {/*            // onTaskFieldChanged={props.onTaskFieldChanged}*/}
                {/*            // selected={a.id === selectedId}*/}
                {/*            key={t.id}*/}
                {/*            {...t}*/}
                {/*        />*/}
                {/*    </label>)}*/}
                {/*{selectedId && <button type="button" onClick={*/}
                {/*    () => {*/}
                {/*        props.onDeleteTask(selectedId);*/}
                {/*        setSelectedId(null);*/}
                {/*    }}>*/}
                {/*    Delete Selected*/}
                {/*</button>}*/}
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