import firebase from "firebase/compat";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignIn.css"

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = useSignInWithEmailAndPassword(props.auth);
    const [signInWithEmailAndPassword, loading, error] = [signIn[0], signIn[2], signIn[3]];
    const [providerError, setProviderError] = useState(false);

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
            </form>
            <button
                type="submit"
                onClick={() => signInWithEmailAndPassword(email, password)}
                className="signin-button">
                Sign In
            </button>
            <div className="signin-google">
                <button
                    className="google-button"
                    onClick={() => props.auth.signInWithPopup(googleProvider)
                        .then(() => {
                            console.log("sign in with google worked")
                            setProviderError(false);

                        })
                        .catch((error) => {
                            console.log("sign with google error is", error, error.code, error.message)
                            setProviderError(true);
                        })
                    }>

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
                    onClick={() => props.auth.signInWithPopup(githubProvider)
                        .then(() => {
                            console.log("github worked")
                            setProviderError(false);
                    })
                        .catch((error) => {
                            console.log("github error is", error.code, error.message);
                            setProviderError(true);
                        })}>
                    <img
                        className="google-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    />
                    Sign In with Github
                </button>
            </div>
            {!loading && (error) &&
            <div className="error-signin">
                {error.code === 'auth/weak-password'
                    ? "Password must be at least 6 characters long."
                    : error.code === 'auth/invalid-email'
                        ? "Please provide a valid email address."
                        : error.code === 'auth/email-already-in-use'
                            ? "This email already has an account associated with it. Try another sign in method."
                            : error.code === 'auth/internal-error'
                                ? "Please re-check your username and password."
                                    : error.code === 'auth/account-exists-with-different-credential'
                                        ? "An account already exists with this email."
                                            : "An error occurred. Check your credentials and try again."
                }
            </div>
            }
            {!loading && (providerError) &&
            <div className="error-provider">
                {
                    "An error occurred. You may already have an existing account with this email with another provider."
                }
            </div>
            }
        </div>
    )
}

export default SignIn;