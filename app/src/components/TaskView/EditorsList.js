import './EditorsList.css';
import Editor from "./Editor";

function EditorsList(props) {
    return (
        <div id="list-container">
            <div className="checklist">
                {props.editors.map(editor =>
                    <Editor {...editor}
                        editor = {editor}
                          // key={task.taskId}
                          // onDeleteTask={props.onDeleteTask}
                          // onTaskFieldChanged={props.onTaskFieldChanged}
                          // onChangePriority={props.onChangePriority}
                    />)}
            </div>
        </div>);
}

export default EditorsList;