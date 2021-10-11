import React, { useState } from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import App from "./App"

function InMemoryApp(props) {
    const [taskList, setTaskList] = useState(props.data)
    const [idCounter, setIdCounter] = useState(taskList.length);
    const [currTask, setCurrTask] = useState("");
    const [isEditingId, setIsEditingId] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [lastTasks, setLastTasks] = useState([]);

    function handleAddTask(currTask) {
        console.log("adding task ", currTask)
        console.log("taskList is", taskList)

        setTaskList([...taskList, {
            taskId: idCounter,
            taskLabel: currTask,
            isCompleted: false
        }]);
        setIdCounter(idCounter + 1);
        console.log("taskList ", taskList)
    }

    function handleTaskFieldChanged(taskId, field, value) {
        setTaskList(taskList.map(
            task => task.taskId !== taskId
                ? task
                : {...task, [field]: value}))
        console.log("handle changed taskList ", taskList)
    }

    function handleDeleteTask(taskID) {
        setTaskList(taskList.filter(task => task.taskId !==taskID))
    }

    function handleShowTasks() {
        setTaskList(lastTasks)
    }

    function handleHideTasks() {
        setLastTasks(taskList)
        setTaskList(taskList.filter(task => task.isCompleted == false))
    }

    function handleDeleteTasks() {
        setTaskList(taskList.filter(task => task.isCompleted == false))
    }

    return <div>
        <App data={props.data}
                taskList={taskList}
                setTaskList={setTaskList}
                setCurrTask={setCurrTask}
                currTask={currTask}

                handleDeleteTask={handleDeleteTask}
                handleDeleteTasks={handleDeleteTasks}
                handleAddTask={handleAddTask}
                handleHideTasks = {handleHideTasks}
                handleShowTasks = {handleShowTasks}
                handleTaskFieldChanged={handleTaskFieldChanged}
        />
    </div>
}

export default InMemoryApp;