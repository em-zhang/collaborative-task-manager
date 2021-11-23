import React from 'react';
import ListItem from './ListItem'
import './ListMenu.css';

function ListMenu(props) {
    return (
        <div id="list-container">
            <div className="checklist">
                {props.listData.map(list =>
                    <ListItem
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
        </div>);
}

export default ListMenu;