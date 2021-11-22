import TextareaAutosize from 'react-textarea-autosize';
import './ListItem.css';

function ListItem(props) {
    return (
        <div className="list-item-container">
            <TextareaAutosize
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
            <div>
            <button
                aria-label="Delete list button"
                className="delete-list-button"
                    onClick={() => {
                        props.onDeleteList(props.listID);
                    }}>
                X
            </button>
            </div>
        </div>
    )
}

export default ListItem;