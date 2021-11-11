import TextareaAutosize from 'react-textarea-autosize';
import {useState} from "react";

function ListItem(props) {
    return (
        <div>
            <TextareaAutosize
                value={props.listName}
            />
            <div>
                <button className="button"
                        onClick={() => {
                            console.log("test");
                        }}>
                    View list
                </button>
            </div>
        </div>

    )
}

export default ListItem;