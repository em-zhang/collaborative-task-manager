import React, { useState } from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import App from "./App"

function InMemoryApp(props) {
    const [taskList, setTaskList] = useState(props.initialData);
    const [idCounter, setIdCounter] = useState(taskList.length);

    function handleAddTask(currTask) {
        setTaskList([...taskList, {
            taskId: idCounter,
            taskLabel: currTask,
            isCompleted: false
        }]);
        setIdCounter(idCounter + 1);
    }

    function handleTaskFieldChanged(taskId, field, value) {
        setTaskList(taskList.map(
            task => task.taskId !== taskId
                ? task
                : {...task, [field]: value}))
    }

    // u can pass a list of taskIDs
    function handleDeleteTask(taskID) {
        console.log("in handledeletetask", taskID);
        const deletedList = taskList.filter(task => task.taskId !==taskID);
        console.log("deleted list is ", deletedList);
        setTaskList(deletedList)
    }

    // deletecompletedtasks
    function handleDeleteTasks() {
        setTaskList(taskList.filter(task => task.isCompleted == false))
    }

    return <div>
        <App
                taskList={taskList}
                // setTaskList={setTaskList}
                handleDeleteTask={handleDeleteTask}
                handleDeleteTasks={handleDeleteTasks}
                handleAddTask={handleAddTask}
                handleTaskFieldChanged={handleTaskFieldChanged}
        />
    </div>
}

export default InMemoryApp;