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
                class="todo-input"
                id="add-button-text"
                placeholder="Buy Milk"
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
            <button class="todo-input add-button"
                onClick={() =>
                {createTask(currTask);
                setCurrTask("");
                }}>
                Add New Task
            </button>
            {/*/>*/}
            {/*display*/}
            {todoList.map((todo, index) => (
                <div key={todo} className="todo">
                    <label>
                        <input type="checkbox" name="checkbox"/>
                        <span>{todo.todo}</span>
                    </label>
                    {/*<div> {todo.todo}</div>*/}
                </div>
            ))}
        <div class="tasks-remaining-message">
            {/*Show number of tasks*/}
            {`${todoList.length} Remaining Tasks`}
        </div>
        </div>
    );
}
export default TodosComponent;