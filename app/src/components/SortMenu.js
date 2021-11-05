import './SortMenu.css';

function SortMenu(props) {
    return (
        <div className="sort-backdrop">
            <div className="sort-modal">
                {props.children}
                <div className="alert-buttons">
                    <button className={"alert-button"} id={"alert-sort-name"} type={"button"}
                            onClick={() => {
                                props.onSortByName();
                                props.onClose()
                            }}>
                        {props.sortOption === "taskLabel" ? "✓ Name" : "Name"}
                    </button>
                    <button className={"alert-button"} id={"alert-sort-priority"} type={"button"}
                            onClick={() => {
                                props.onSortByPriority();
                                props.onClose()
                            }}>
                        {props.sortOption === "priority" ? "✓ Priority" : "Priority"}
                    </button>
                    <button className={"alert-button"} id={"alert-sort-date"} type={"button"}
                            onClick={() => {
                                props.onSortByCreationDate();
                                props.onClose()
                            }}>
                        {props.sortOption === "dateCreated" ? "✓ Date Created" : "Date Created"}
                    </button>
                    <button className={"alert-button"} id={"alert-sort-cancel"} type={"button"}
                            onClick={() => props.onClose()}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SortMenu;