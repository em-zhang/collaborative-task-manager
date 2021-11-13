import TextareaAutosize from 'react-textarea-autosize';
import './ListItem.css';
import {useState} from "react";

function ListItem(props) {
    return (
        <div className="list-item-container">
            <TextareaAutosize
                className="list-item-label"
                value={props.listName}
                onChange={(e) => {
                    props.onListFieldChanged(props.listID, "listName", e.target.value)
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
            />
            <div>
                <button className="view-list-button"
                        onClick={() => {
                            props.onListSelected(props.listID);
                            console.log("curr list is ", props.currListName, props.currListID)
                            props.showHomepage(false);
                        }}>
                    View list
                </button>
            </div>
            <button className="delete-list-button"
                    onClick={() => {
                        props.onDeleteList(props.listID);
                        console.log("DELETING LIST ", props.listID);
                    }}>
                X
            </button>
        </div>
    )
}

export default ListItem;