import './EditorsList.css';
import Editor from "./Editor";

function EditorsList(props) {
    return (
        <div className="editor-list-container">
        {props.editors.slice(1).map(editor =>
                <Editor {...editor}
                        key={editor}
                        editor={editor}
                        onDeleteEditor={props.onDeleteEditor}
                        isOwner={props.isOwner}
                />)}
            <div id="no-editors-message"> {props.editors.length === 1 ? "This is currently a private list." +
                " Enter an email to share this list with a collaborator." : ""} </div>
        </div>);
}

export default EditorsList;