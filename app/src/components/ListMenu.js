import React from 'react';
import ListItem from './ListItem'
import Task from "./Task";
// import './ToDoList.css';

function ListMenu(props) {
    return (
        <div id="list-menu-container">
            <div id="list-menu">
                {props.listData.map(list =>
                    <ListItem
                        listID={list.id}
                        listName={list.listName}
                    />)}
            </div>
        </div>);
}

export default ListMenu;