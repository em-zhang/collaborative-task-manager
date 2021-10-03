import React, { useState } from "react";
import initialData from '../index.js'

function TodosComponent() {
    const [currTask, setCurrTask] = useState("");
    const [todoList, setTodoList] = useState([
        {
            todo: "Buy new John Grisham book",
            isDone: true
        },
        {
            todo: "Get car washed",
            isDone: false
        },
        {
            todo: "Order textbooks",
            isDone: false
        },
        {
            todo: "Call Mom",
            isDone: false
        },
    ]);

    function createTask(currTask) {
        let todoQueue = [...todoList];
        todoQueue.push({
            todo: currTask,
            completed: false
        });
        setTodoList(todoQueue);
    }

    function markTaskComplete(index) {
        let todoQueue = [...todoList];
        todoQueue[index].isCompleted = !todoQueue[index].isCompleted;
        setCurrTask(todoQueue);
    }

    return (
        <div>
            <input
                className="todo-input"
                placeholder="Add a task"
                value={currTask}
                onChange={e => {
                    setCurrTask(e.target.value);
                }}
                // also need to support functionality for button
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        createTask(currTask);
                        setCurrTask("");
                    }
                }}
            />
            {/*display*/}
            {todoList.map((todo, index) => (
                <div key={todo} className="todo">
                    <div> {todo.todo}</div>
                </div>
            ))}
        <div className="tasks-remaining-message">
            {/*Show number of tasks*/}
            {`${todoList.length} remaining tasks`}
        </div>
        </div>
    );
}
export default TodosComponent;