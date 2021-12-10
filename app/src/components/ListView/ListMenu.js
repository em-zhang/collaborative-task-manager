import React from 'react';
import ListItem from './ListItem'
import './ListMenu.css';
import AddList from "./AddList";

function ListMenu(props) {
    return (
        <div className="list-page">
            <div className="top-button-bar">
                <div className="add-task">
                    <AddList
                        onAddList={props.onAddList}
                        onListSelected={props.onListSelected}
                    />
                </div>
            </div>
            <div id="list-container">
                <div className="checklist">
                    {props.listData.length === 0 ? "No current lists." : null}
                    {props.listData.map(list =>
                        <ListItem
                            isOwner={props.isOwner}
                            editors={list.editors}
                            listID={list.id}
                            listName={list.listName}
                            currListID={props.currListID}
                            currListName={props.currListName}
                            onListSelected={props.onListSelected}
                            homepage={props.homepage}
                            showHomepage={props.showHomepage}
                            onDeleteList={props.onDeleteList}
                            onListFieldChanged={props.onListFieldChanged}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default ListMenu;