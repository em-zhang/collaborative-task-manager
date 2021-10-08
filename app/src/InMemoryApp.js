import React, { useState } from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import App from "./App"

function InMemoryApp(props) {
    const [currId, setCurrId] = useState(0)
    const [taskList, setTaskList] = useState(props.data)
    // const [idCounter, setIdCounter] = useState(taskList.length);
    const [currTask, setCurrTask] = useState("");
    const [isEditingId, setIsEditingId] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    function handleAddTask(currTask) {
        console.log("adding task ", currTask)
        console.log("taskList is", taskList)

        setTaskList([...taskList, {
            taskId: generateUniqueID(),
            taskLabel: currTask,
            isCompleted: false
        }]);
        console.log("taskList ", taskList)

    }
    // function handleCompleteTask(index) {
    //     let todoQueue = [...taskList];
    //     todoQueue[index].isDone = !todoQueue[index].isDone;
    //     setCurrTask(todoQueue);
    // }

    function handleTaskFieldChanged(taskId, field, value) {
        setTaskList(props.data.map(
            task => task.id !== taskId
                ? task
                : {...task, [field]: value}))
    }

    function handleDeleteTask(taskID) {
        setTaskList(taskList.filter(task => task.id !==taskID))
    }

    return <div>
        <App data={props.data}
                taskList={taskList}
                setTaskList={setTaskList}
                setCurrTask={setCurrTask}
                currTask={currTask}
                // handleCompleteTask={handleCompleteTask()}
                handleDeleteTask={handleDeleteTask}
                handleAddTask={handleAddTask}
                handleTaskFieldChanged={handleTaskFieldChanged}
        />
    </div>
    //
    // return (
    //
    //     <div>
    //         <AddTask
    //             onClick={createTask}
    //         />
    //         <button class="todo-input add-button"
    //                 onClick={() =>
    //                 {createTask(currTask);
    //                     setCurrTask("");
    //                 }}>
    //             Add New Task
    //         </button>
    //         {/*/>*/}
    //         {/*display*/}
    //         {taskList.map((todo, index) => (
    //             <div key={todo} className="todo">
    //                 <label>
    //                     <input type="checkbox" name="checkbox"/>
    //                     <span>{todo.task}</span>
    //                 </label>
    //                 {/*<div> {todo.task}</div>*/}
    //             </div>
    //         ))}
    //         <h1>ToDoList ({selectedId === null ? 0 : 1}/{props.list.length} selected)</h1>
    //         {props.list.map(a => <Task
    //             onRowClick={(id) =>
    //                 setSelectedId(id)}
    //             onTaskFieldChanged={props.editTask}
    //             selected={a.id === selectedId}
    //             key={a.id}
    //             {...a} />)}
    //         <div class="tasks-remaining-message">
    //             {/*Show number of tasks*/}
    //             {`${taskList.length} Remaining Tasks`}
    //         </div>
    //     </div>
    // );
}

export default InMemoryApp;