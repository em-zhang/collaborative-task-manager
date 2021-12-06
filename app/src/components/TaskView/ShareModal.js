import './ShareModal.css';
import AddEditor from "./AddEditor";

function ShareModal(props) {
    return (
        <div className="share-backdrop">
            <div className="share-modal">
                {props.children}
                <div className="share-buttons">
                    <div id="share-message">
                        Share Settings
                    </div>
                    <AddEditor></AddEditor>
                    <div id="editors-list">
                        Editors Go Here
                    </div>
                    <button tabIndex="0"
                            className="share-button"
                            id="share-alert-cancel"
                            onClick={() => props.onClose()}
                            onKeyDown={e => {
                                if(e.keyCode === 9) {
                                    e.preventDefault();
                                    document.getElementById("alert-ok").focus();
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