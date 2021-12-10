import React from 'react';
import './ListMenu.css';
import SharedListItem from "./SharedListItem";

function SharedLists(props) {
    const currentListName = props.listName;

    return (
        <div id="list-container">
            <div className="checklist">
                {props.verified ?
                props.sharedListData.map(list =>
                    <SharedListItem
                        listID={list.id}
                        listName={list.listName}
                        editors={list.editors}
                        currListID={props.currListID}
                        currListName={currentListName}
                        onListSelected={props.onListSelected}
                        homepage={props.homepage}
                        showHomepage={props.showHomepage}
                        onDeleteList={props.onDeleteList}
                        onListFieldChanged={props.onListFieldChanged}
                    />)
                    :
                    <div>
                        <p>You must verify your email in order to see lists that have been shared with you.</p>
                        <button
                            id="verify-email-button-2"
                            type="button"
                            onClick={props.handleVerifyEmail}>
                            Send Verification Email
                        </button>
                    </div>

                }
            </div>
        </div>);
}

export default SharedLists;