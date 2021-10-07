function AddTask(props){
    return (
        <div>
            <input
                className="todo-input"
                id="add-button-text"
                placeholder="Enter task here"
                value={props.currTask}
                onChange={e => {
                    props.setCurrTask(e.target.value);
                    console.log("curr task is", props.currTask);
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        console.log("the curr task is ", props.currTask)
                        props.handleAddTask(props.currTask);
                        props.setCurrTask("");
                    }
                }}
            />
            <button className="todo-input add-button"
                    onClick={() => {
                        props.handleAddTask(props.currTask);
                        props.setCurrTask("");
                    }}>
                Add Task
            </button>
            <div className="tasks-remaining-message">
                {/*Show number of tasks*/}
                {props.length > 0 && `${props.length} remaining tasks`}
            </div>
        </div>
    );
}
            {/*<button type="button" onClick={props.handleAddTask}> Add New Task </button>*/}
            {/*<input className="todo-input"*/}
            {/*       onClick={() =>*/}
            {/*       {props.handleAddTask(props.currTask);*/}
            {/*           props.setCurrTask("");*/}
            {/*       }}>*/}
            {/*        Add New Task*/}
            {/*</input>butt*/}
            {/*    // placeholder="Add a task"*/}
            {/*    // value={props.currTask}*/}
            {/*    // onChange={e => {*/}
                //     props.setCurrTask(e.target.value);
                // }}
                // // also need to support functionality for button
                // onKeyPress={e => {
                //     if (e.key === "Enter") {
                //         props.handleAddTask(props.currTask);
                //         props.setCurrTask("");
                //     }
                // }}
            // />
            {/*{props.map((todo, index) => (*/}
            {/*    <div key={todo} className="todo">*/}
            {/*        <div className="checkbox" onClick={() => props.handleCompleteTask(index)}>*/}
            {/*            {todo.completed && <span>&#x2714;</span>}*/}
            {/*        </div>*/}
            {/*        <div className={todo.completed ? "done" : ""}>{todo.todo}</div>*/}
            {/*    </div>*/}
            {/*))}*/}



//
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

export default AddTask;