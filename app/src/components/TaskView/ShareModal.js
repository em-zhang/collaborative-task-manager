import './ShareModal.css';
import AddEditor from "./AddEditor";
import EditorsList from "./EditorsList";

function ShareModal(props) {
    const isOwner = props.owner === props.user.email;

    return (
        <div className="share-backdrop">
            <div className="share-modal">
                {props.children}
                <div className="share-buttons">
                    <div id="share-message">
                        Share Settings
                    </div>
                    <div id="owner-message">
                        Owner: {props.owner}
                    </div>
                    <AddEditor
                        id="add-editors"
                        currListID={props.currListID}
                        onAddEditor={props.onAddEditor}
                        onDeleteEditor={props.onDeleteEditor}
                    >
                    </AddEditor>
                    <div id="share-message">
                        Editors
                    </div>
                    <EditorsList
                        id="editors-list"
                        owner={props.owner}
                        editors={props.editors}
                        onDeleteEditor={props.onDeleteEditor}
                        isOwner={isOwner}
                    >
                        Editors Go Here
                    </EditorsList>
                    <div id="share-message">
                        Pending Invitations
                    </div>
                    <button tabIndex="0"
                            className="share-button"
                            id="share-alert-cancel"
                            onClick={() => props.onClose()}
                            onKeyDown={e => {
                                if(e.keyCode === 9) {
                                    e.preventDefault();
                                    if (document.getElementById("add-editors")) {
                                        document.getElementById("add-editors").focus();
                                    }
                                }
                            }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;