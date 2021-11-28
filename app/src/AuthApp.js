import App from './App';
import TabList from './components/TabList';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import loadingSymbol from '../src/LoadingSymbol.gif'
import React, {useState} from "react";
import firebase from "firebase/compat";
import {  useCollection } from "react-firebase-hooks/firestore";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcQ6XCOvMIA7pHME4bWBgy_7OVy_7XErA",
    authDomain: "cs124-fall2021.firebaseapp.com",
    projectId: "cs124-fall2021",
    storageBucket: "cs124-fall2021.appspot.com",
    messagingSenderId: "264318304667",
    appId: "1:264318304667:web:81528b78246f82b1cd613e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

function AuthApp(props) {
    const [user, loading, error] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            {user.displayName || user.email}
            <SignedInApp {...props} user={user}/>
            <button type="button" onClick={() => auth.signOut()}>Logout</button>
            {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}
        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
            <TabList>
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
            </TabList>
        </>
    }
}

const FAKE_EMAIL = 'foo@bar.com';
const FAKE_PASSWORD = 'xyzzyxx';

function SignIn() {
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Logging in…</p>
    }
    return <div>
        {error && <p>"Error logging in: " {error.message}</p>}
        <button onClick={() =>
            signInWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>Login with test user Email/PW
        </button>
        <button onClick={() =>
            auth.signInWithPopup(googleProvider)}>Login with Google
        </button>
    </div>
}

function SignUp() {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }
    return <div>
        {error && <p>"Error signing up: " {error.message}</p>}
        <button onClick={() =>
            createUserWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>
            Create test user
        </button>

    </div>
}

const collectionName = "TaskManager-AuthenticationRequired-1"

function SignedInApp(props) {
    let queryAll = db.collection(collectionName).where('owner', "==", props.user.uid);
    const [all_value] = useCollection(queryAll);

    let listIDs = [];
    if (all_value) {
        listIDs = all_value.docs.map((doc) => {
            return {...doc.data()}});
    }

    // only get data from the current list
    const [currentList, setCurrentList] = useState("default-list");
    let query = db.collection(collectionName).doc(currentList).collection("list-items")
        .where('owner', "==", props.user.uid);

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

    // delete a task based on taskID
    function handleDeleteTask(taskID) {
        db.collection(collectionName).doc(currentList).collection("list-items").doc(taskID).delete()
            .catch((error) => {
                    console.error("Error deleting document: ", error);
                });
    }

    // adds a task, generating new id each time
    function handleAddTask(currTask) {
        const newId = generateUniqueID();
        db.collection(collectionName).doc(currentList).collection("list-items").doc(newId).set({
            taskId: newId,
            taskLabel: currTask,
            isCompleted: false,
            priority: 1,
            dateCreated: firebase.database.ServerValue.TIMESTAMP,
            owner: props.user.uid
        }).catch((error) => {
            console.error("Error writing document: ", error);
        })
        return newId;
    }

    // handles updating any field of a task
    function handleTaskFieldChanged(taskId, field, value) {
        const doc = db.collection(collectionName).doc(currentList).collection("list-items").doc(taskId);
        doc.update({
            [field]: value,
        }).catch((error) => {
            console.error("Error updating document: ", error);
        })
    }

    // change a task's priority among 1/2/3
    function handleChangePriority(taskID, taskPriority) {
        let docRef = db.collection(collectionName).doc(currentList).collection("list-items").doc(taskID);
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
        let delete_query = db.collection(collectionName).doc(currentList).collection("list-items").where('isCompleted', '==', true);
        delete_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
    }

    // select a sort option
    function handleSortSelected(option){
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
    function handleAddList(newList){
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            listName: newList,
        })
        return newId;
    }

    // delete a list
    function handleDeleteList(listID) {
        db.collection(collectionName).doc(listID).delete();
    }

    // select and go into a list
    function handleListSelected(list){
        setCurrentList(list)
    }

    // determine what list name to display in the header of the app
    let currentListName = "";
    if (listIDs.length > 0){
        // find the information of the current list that we are displaying
        let currList = listIDs.filter((e) => e.id === currentList);
        if (currList.length > 0) {
            currentListName = listIDs.filter((e) => e.id === currentList)[0].listName;
        }
    }

    return <div>
        <App
            listData={listIDs}
            currListID={currentList}
            currListName={currentListName}
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
            <img src={loadingSymbol} alt="Loading..." />
        </div>}
    </div>
}

export default AuthApp;