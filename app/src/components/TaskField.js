function TaskField(props) {
    return <input type="text"
                  className={props.field}
                  onChange={
                      event=>props.onTaskFieldChanged(props.id, props.field, event.target.value)
                  }
                  value={props[props.field]} />
}

export default TaskField;