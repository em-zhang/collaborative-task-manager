import './ListItem.css';
import SelectionMaintainingInput from "../SelectionMaintainingInput";

function SharedListItem(props) {
    console.log("list item is", props.listID, props.listName)
    return (
        <div className="list-item-container">
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
            <div className="button-container">
                <button className="view-list-button"
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