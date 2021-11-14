import './AddList.css';
import {useState} from "react";

function AddTask(props){
    const [currList, setCurrList] = useState("");

    return (
        <div>
            <input
                className="list-input"
                id="new-list-text"
                placeholder="Create a new list"
                value={currList}
                onChange={e => {
                    setCurrList(e.target.value);
                }}
                onKeyPress={e => {
                    if (currList !== "") {
                        if (e.key === "Enter") {
                            props.onAddList(currList);
                            console.log("adding new list with name ", currList)
                            setCurrList("");
                        }
                    }
                }}
            />
            <button className={currList !== "" ? "list-add-button" : "list-add-button-disabled"}
                    onClick={() => {
                        if (currList !== "") {
                            props.onAddList(currList);
                            setCurrList("");
                        }
                    }}>
                Add
            </button>
        </div>
    );
}

export default AddTask;