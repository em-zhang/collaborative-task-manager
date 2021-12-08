import './EditorsList.css';
import Editor from "./Editor";
import Task from "./Task";

function EditorsList(props) {
    return (
        <div id="list-container">
            <div className="checklist">
                {props.editors.slice(1).map(editor =>
                    <Editor {...editor}
                            key={editor}
                            editor={editor}
                            onDeleteEditor={props.onDeleteEditor}
                            isOwner={props.isOwner}
                    />)}

            </div>
        </div>);
}

export default EditorsList;