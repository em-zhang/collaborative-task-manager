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

export default AddTask;