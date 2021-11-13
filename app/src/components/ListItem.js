import TextareaAutosize from 'react-textarea-autosize';
import './ListItem.css';
import {useState} from "react";

function ListItem(props) {
    return (
        <div className="list-item-container">
            <TextareaAutosize
                className="list-item-label"
                value={props.listName}
            />
            <div>
                <button className="view-list-button"
                        onClick={() => {
                            console.log("test");
                            props.onListSelected(props.listID);
                            console.log("curr list is ", props.currListName, props.currListID)
                        }}>
                    View list
                </button>
            </div>
        </div>

    )
}

export default ListItem;