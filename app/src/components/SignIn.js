import firebase from "firebase/compat";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignIn.css"

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(props.auth);

    console.log("it is", googleProvider.email);
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    className="signin-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    className="signin-input"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password"
                />
                <button
                    type="submit"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                    className="signin-button">
                    Sign In
                </button>
            </form>
            {!loading && error && "An error occurred. Please check your credentials" && error.message}
            <div className="signin-google">
                <button
                    className="google-button"
                    onClick={() => props.auth.signInWithPopup(googleProvider)}>
                    <img
                        className="google-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                    />
                    Sign In with Google
                </button>
            </div>
            <div className="signin-google">
                <button
                    className="google-button"
                    onClick={() => props.auth.signInWithPopup(githubProvider) && console.log("googleProvider is ", googleProvider.uid, googleProvider.email)}>
                    <img
                        className="google-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    />
                    Sign In with Github
                </button>
            </div>
        </div>
    )
}

export default SignIn;