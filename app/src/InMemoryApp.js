import React, {useState} from "react";
import App from './App';
import AuthPage from "./components/AuthPage";
import loadingSymbol from '../src/LoadingSymbol.gif'
import './InMemoryApp.css';


// Import the functions you need from the SDKs you need
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import AddList from "./components/ListView/AddList";
import ListMenu from "./components/ListView/ListMenu";


const firebaseConfig = {
    apiKey: "AIzaSyDQNFNc9MOCJM7dDkmRmHeJu2-vx_XdZPI",
    authDomain: "em-zhang-cs124-lab.firebaseapp.com",
    projectId: "em-zhang-cs124-lab",
    storageBucket: "em-zhang-cs124-lab.appspot.com",
    messagingSenderId: "791807570724",
    appId: "1:791807570724:web:8c92b693e902d7077ab9b1",
    measurementId: "G-2CLJDP4NEV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

function InMemoryApp(props) {
    const [user, loading, error] = useAuthState(auth);
    let sentEmail = false;

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            <div class="profile">
                <div id="user-id">
                    <div>
                        <i id="profile-icon"
                           className={user.emailVerified ? "las la-user-check" : "las la-user"}>
                        </i>
                    </div>
                    <div id="email">{user.email}</div>
                </div>
                <div id="profile-button">
                    <button id="logout-button" type="button" onClick={() => auth.signOut()}>
                        <i id="logout-icon" className="las la-sign-out-alt"></i>
                    </button>
                </div>
                {!user.emailVerified &&
                <button
                    id="verify-email-button"
                    type="button"
                    onClick={verifyEmail}>
                    Verify email
                </button>}
            </div>
            <SignedInApp
                {...props}
                user={user}
                email={user.email}
            />

        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
            <AuthPage
                auth={auth}
                user={user}
            />
        </>
    }
}

const collectionName = "list-items"

function SignedInApp(props) {
    let queryAll = db.collection(collectionName).where("editors", "array-contains", props.email);
    // let querySharedLists = db.collection(collectionName).where("editors", "array-contains", props.email);

    const [all_value] = useCollection(queryAll);
    // const [shared_lists] = useCollection(querySharedLists);

    let listIDs = [];
    if (all_value) {
        listIDs = all_value.docs.map((doc) => {
            return {...doc.data()}
        });
    }

    // only get data from the current list
    const [currentList, setCurrentList] = useState("default-list");

    let query = db.collection(collectionName).doc(currentList).collection("tasks");

    // set the sort option to order the query
    const [sortOption, setSortOption] = useState("dateCreated");
    query = query.orderBy(sortOption, sortOption === "priority" ? "desc" : "asc")

    // return values of the task list
    const [value, loading, error] = useCollection(query);
    let taskList = [];
    if (value) {
        taskList = value.docs.map((doc) => {
            return {...doc.data()}
        });
    }

    // determine what list name to display in the header of the app
    let currentListName = "";
    let listOwner = null;
    let listEditors = null;
    let isSharable = false;

    if (listIDs.length > 0) {
        // find the information of the current list that we are displaying
        let currList = listIDs.filter((e) => e.id === currentList);
        if (currList.length > 0) {
            currentListName = listIDs.filter((e) => e.id === currentList)[0].listName;
            listOwner = listIDs.filter((e) => e.id === currentList)[0].owner;
            listEditors = listIDs.filter((e) => e.id === currentList)[0].editors;
            isSharable = (listIDs.filter((e) => e.id === currentList)[0].owner === props.email);
        }
    }

    const isOwner = props.user.email === listOwner;

    // delete a task based on taskID
    function handleDeleteTask(taskID) {
        db.collection(collectionName).doc(currentList).collection("tasks").doc(taskID).delete()
            .catch((error) => {
                console.error("Error deleting document: ", error);
            });
    }

    // adds a task, generating new id each time
    function handleAddTask(currTask) {
        const newId = generateUniqueID();
        db.collection(collectionName).doc(currentList).collection("tasks").doc(newId).set({
            taskId: newId,
            taskLabel: currTask,
            isCompleted: false,
            priority: 1,
            dateCreated: firebase.database.ServerValue.TIMESTAMP,
        }).catch((error) => {
            console.error("Error writing document: ", error);
        })
        return newId;
    }

    // handles updating any field of a task
    function handleTaskFieldChanged(taskId, field, value) {
        const doc = db.collection(collectionName).doc(currentList).collection("tasks").doc(taskId);
        doc.update({
            [field]: value,
        }).catch((error) => {
            console.error("Error updating document: ", error);
        })
    }

    // change a task's priority among 1/2/3
    function handleChangePriority(taskID, taskPriority) {
        let docRef = db.collection(collectionName).doc(currentList).collection("tasks").doc(taskID);
        if (taskPriority === 1) {
            docRef.update({
                priority: 2
            })
        } else if (taskPriority === 2) {
            docRef.update({
                priority: 3
            })
        } else if (taskPriority === 3) {
            docRef.update({
                priority: 1
            })
        }
    }

    // delete completed tasks in a list
    function handleDeleteTasks() {
        let delete_query = db.collection(collectionName).doc(currentList).collection("tasks").where('isCompleted', '==', true);
        delete_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
    }

    // select a sort option
    function handleSortSelected(option) {
        setSortOption(option);
    }

    // handles updating any field of a list
    function handleListFieldChanged(listID, field, value) {
        const doc = db.collection(collectionName).doc(listID);
        doc.update({
            [field]: value,
        })
    }

    // add a new list
    function handleAddList(newList) {
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            listName: newList,
            owner: props.email,
            editors: [props.email],
        })
        return newId;
    }

    // delete a list
    function handleDeleteList(listID) {
        db.collection(collectionName).doc(listID).delete();
    }

    // select and go into a list
    function handleListSelected(list) {
        setCurrentList(list)
    }

    function handleAddEditor(editorEmail) {
        console.log("In handleAddEditor")
        const doc = db.collection(collectionName).doc(currentList);
        doc.update({
            editors: firebase.firestore.FieldValue.arrayUnion(editorEmail)
        });
    }

    function handleDeleteEditor(editorEmail) {
        const doc = db.collection(collectionName).doc(currentList);
        doc.update({
            editors: firebase.firestore.FieldValue.arrayRemove(editorEmail)
        });
    }

    return <div>
        <App
            user={props.user}
            listData={listIDs}
            currListID={currentList}
            currListName={currentListName}
            owner={listOwner}
            isOwner={isOwner}
            editors={listEditors}

            handleAddEditor={handleAddEditor}
            handleDeleteEditor={handleDeleteEditor}

            handleAddList={handleAddList}
            handleListSelected={handleListSelected}
            handleDeleteList={handleDeleteList}
            handleListFieldChanged={handleListFieldChanged}

            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleChangePriority={handleChangePriority}
            handleDeleteTasks={handleDeleteTasks}
            handleAddTask={handleAddTask}
            handleTaskFieldChanged={handleTaskFieldChanged}
            handleSortSelected={handleSortSelected}
            sortOption={sortOption}
        />
        {loading &&
        <div className="loading-message">
            <img src={loadingSymbol} alt="Loading..."/>
        </div>}
    </div>
}

export default InMemoryApp;