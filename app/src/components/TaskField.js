function TaskField(props) {
    return <input type="text"
                  className={props.taskLabel}
                  onChange={
                      event=>props.onTaskFieldChanged(props.id, props.taskLabel, event.target.value)
                  }
                  value={props[props.taskLabel]} />
}

export default TaskField;