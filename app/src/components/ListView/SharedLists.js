import React from 'react';
import ListItem from './ListItem'
import './ListMenu.css';
import SharedListItem from "./SharedListItem";

function SharedLists(props) {
    const currentListName = props.listName;
    console.log("list item is", props.listID, props.listName)

    return (
        <div id="list-container">
            <div className="checklist">
                {props.sharedListData.map(list =>
                    <SharedListItem
                        listID={list.id}
                        listName={list.listName}
                        currListID={props.currListID}
                        currListName={currentListName}
                        onListSelected={props.onListSelected}
                        homepage={props.homepage}
                        showHomepage={props.showHomepage}
                        onDeleteList={props.onDeleteList}
                        onListFieldChanged={props.onListFieldChanged}
                    />)}
            </div>
        </div>);
}

export default SharedLists;