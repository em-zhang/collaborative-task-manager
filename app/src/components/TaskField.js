function TaskField(props) {
    console.log("curr task list is ", props.taskList);
    return <input type="text"
                  className="task-field"
                  onChange={
                      event=>props.handleTaskFieldChanged(props.id, props.taskLabel, event.target.value)
                  }
                  value={props.taskLabel} />
}

export default TaskField;