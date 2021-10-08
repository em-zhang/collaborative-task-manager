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
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
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
        </div>
    );
}

export default AddTask;