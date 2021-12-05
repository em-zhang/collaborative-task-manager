import { useState } from "react";
import firebase from "firebase/compat";
import SignIn from "./SignIn.js"
import SignUp from "./SignUp"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignIn.css";
import TabList from "./TabList";

function AuthPage(props) {
    return (
        <div className="app-container">
            <div className="heading">
                <h1>
                    <div
                        aria-label="Task Manager"
                        className="title">
                        Task Manager
                    </div>
                </h1>
                <div className="header">
                    <TabList className="tabs">
                        <SignIn
                            key="Sign In"
                            auth={props.auth}
                        />
                        <SignUp
                            key="Sign Up"
                            auth={props.auth}
                        />
                    </TabList>
                </div>
            </div>
        </div>

    )
}

//     const [
//         signInWithEmailAndPassword,
//         userCredential, loading, error
//     ] = useSignInWithEmailAndPassword(props.auth);
//
//     if (userCredential) {
//         // Shouldn't happen because App should see that
//         // we are signed in.
//         return <div>Unexpectedly signed in already</div>
//     } else if (loading) {
//         return <p>Logging in…</p>
//     }
//     return <div>
//         {error && <p>"Error logging in: " {error.message}</p>}
//         <button onClick={() =>
//             signInWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>Login with test user Email/PW
//         </button>
//         <button onClick={() =>
//             props.auth.signInWithPopup(googleProvider)}>Login with Google
//         </button>
//     </div>
// }
//
// function SignUp(props) {
//     const [
//         createUserWithEmailAndPassword,
//         userCredential, loading, error
//     ] = useCreateUserWithEmailAndPassword(props.auth);
//
//     if (userCredential) {
//         // Shouldn't happen because App should see that
//         // we are signed in.
//         return <div>Unexpectedly signed in already</div>
//     } else if (loading) {
//         return <p>Signing up…</p>
//     }
//     return <div>
//         {error && <p>"Error signing up: " {error.message}</p>}
//         <button onClick={() =>
//             createUserWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>
//             Create test user
//         </button>
//     </div>
// }
//
export default AuthPage;