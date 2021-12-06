import './ShareModal.css';

function ShareModal(props) {
    return (
        <div className="sort-backdrop">
            <div className="sort-modal">
                {props.children}
                <div className="sort-buttons">
                    <div id="share-message">
                        Share this list with collaborators
                    </div>
                    <button className={"alert-button"} id={"alert-sort-date"} type={"button"}
                            onClick={() => {
                                props.onSortByCreationDate();
                                props.onClose()
                            }}
                            onKeyDown={e => {
                                if (e.keyCode === 9) {
                                    e.preventDefault();
                                    document.getElementById("alert-sort-name").focus();
                                }
                            }}
                    >
                        {props.sortOption === "dateCreated" ? "✓ Date Created" : "Date Created"}
                    </button>
                    <button className={"alert-button"} id={"alert-sort-name"} type={"button"}
                            onClick={() => {
                                props.onSortByName();
                                props.onClose()
                            }}
                            onKeyDown={e => {
                                if (e.keyCode === 9) {
                                    e.preventDefault();
                                    document.getElementById("alert-sort-priority").focus();
                                }
                            }}
                    >
                        {props.sortOption === "taskLabel" ? "✓ Name" : "Name"}
                    </button>
                    <button className={"alert-button"} id={"alert-sort-priority"} type={"button"}
                            onClick={() => {
                                props.onSortByPriority();
                                props.onClose()
                            }}
                            onKeyDown={e => {
                                if (e.keyCode === 9) {
                                    e.preventDefault();
                                    document.getElementById("alert-sort-date").focus();
                                }
                            }}
                    >
                        {props.sortOption === "priority" ? "✓ Priority" : "Priority"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;