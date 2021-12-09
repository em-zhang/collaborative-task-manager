import "./ShareListItem.css"
import SelectionMaintainingInput from "../SelectionMaintainingInput";

function SharedListItem(props) {
    console.log("list item is", props.listID, props.listName)
    return (
        <div className="shared-list-item-container">
            <SelectionMaintainingInput
                id="list-item-label"
                value={props.listName}
                onChange={(e) => {
                    props.onListFieldChanged(props.listID, "listName", e.target.value)
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        if(document.getElementById('list-item-label')){
                            document.getElementById('list-item-label').blur();
                        }
                    }
                }}
            />
            <div className="collab-icon">
                <i className={props.editors.length > 1 ? "las la-user-friends" : null }></i>
            </div>
            <div className="button-container">
                <button className="shared-view-list-button"
                        onClick={() => {
                            props.onListSelected(props.listID);
                            props.showHomepage(false);
                            if(document.getElementById("home-button")){
                                document.getElementById("home-button").focus();
                            }

                        }}>
                    View
                </button>
            </div>
        </div>
    )
}

export default SharedListItem;