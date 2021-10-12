import React, { useState } from "react";
import App from "./App"

function InMemoryApp(props) {
    const [taskList, setTaskList] = useState(props.initialData);
    const [idCounter, setIdCounter] = useState(taskList.length);

    // adds a task, maintaining a taskId counter
    function handleAddTask(currTask) {
        setTaskList([...taskList, {
            taskId: idCounter,
            taskLabel: currTask,
            isCompleted: false
        }]);
        setIdCounter(idCounter + 1);
    }

    // handles updating any field of a task
    function handleTaskFieldChanged(taskId, field, value) {
        setTaskList(taskList.map(
            task => task.taskId !== taskId
                ? task
                : {...task, [field]: value}))
    }

    // handles task deletion through filtering
    function handleDeleteTask(taskID) {
        const deletedList = taskList.filter(task => task.taskId !== taskID);
        setTaskList(deletedList)
    }
    function handleDeleteTasks() {
        setTaskList(taskList.filter(task => task.isCompleted === false))
    }

    return <div>
        <App
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleDeleteTasks={handleDeleteTasks}
            handleAddTask={handleAddTask}
            handleTaskFieldChanged={handleTaskFieldChanged}
        />
    </div>
}

export default InMemoryApp;