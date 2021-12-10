import './Editor.css';
import TextareaAutosize from 'react-textarea-autosize';

function Editor(props) {
    return (
        <div className="editor-container">
            <TextareaAutosize
                id="editor-label"
                disabled={true}
                value={props.editor}
            >
            </TextareaAutosize>
            {props.isOwner &&
            <button
                className="delete-editor-button"
                aria-label="delete"
                onClick={() => {
                    props.onDeleteEditor(props.editor);
                }}
            >
                X
            </button>
            }

        </div>
    )
}

export default Editor;