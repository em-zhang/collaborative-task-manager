import { useState } from "react"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function SignUp(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const signIn = useCreateUserWithEmailAndPassword(props.auth);
    const [createUserWithEmailAndPassword, loading, error] = [signIn[0], signIn[2], signIn[3]];

    const createNewUser = () => {
        if (password !== retypePassword) {
            setPasswordMatchError(true);
            console.log("passwords dont match");
        }
        else {
            setPasswordMatchError(false);
            createUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div>
            <form
                onSubmit={(e) => e.preventDefault()}>
                <input
                    className="signin-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email"
                    type="email"
                />
                <input
                    className="signin-input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password"
                    type="password"
                />
                <input
                    value={retypePassword}
                    onChange={e => setRetypePassword(e.target.value)}
                    placeholder="retype password"
                    type="password"
                    className="signin-input"
                />
                <button
                    className="signin-button"
                    onClick={() => createNewUser()}>
                    Sign Up
                </button>
            </form>
            {!loading && (error || passwordMatchError) &&
            <div className="error-signup">
                {
                    passwordMatchError
                        ? "Passwords do not match"
                        : error.code === 'auth/weak-password'
                            ? "Password must be at least 6 characters long."
                            : error.code === 'auth/invalid-email'
                                ? "Please provide a valid email address."
                                : error.code === 'auth/email-already-in-use'
                                    ? "This email already has an account associated with it. Try another sign in method."
                                    : error.code === 'auth/internal-error'
                                        ? "Please re-check your username and password."
                                        : "Some error occurred; please try again."
                }
            </div>
            }
        </div>
    )
}

export default SignUp;