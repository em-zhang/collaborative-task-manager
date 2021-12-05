import { useState } from "react"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function SignUp(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(props.auth);
    const FAKE_EMAIL = 'foo@bar.com';
    const FAKE_PASSWORD = 'foobar';

    const createNewUser = () => {
        if (password !== retypePassword) {
            setPasswordMatchError(true);
            console.log("passwords dont match");
        }
        else {
            setPasswordMatchError(false);
            console.log("creating user with email/password ", email, password);
            createUserWithEmailAndPassword(email, password);
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
                <button
                    onClick={() => createUserWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>
                    Create test user
                </button>
            </form>
            {!loading && (error || passwordMatchError) &&
            <div className="error-message">
                {passwordMatchError ? "Passwords do not match."
                    : password.length < 6 ? "Password must be at least 6 characters."
                        : email.length === 0 ? "Please enter a valid email address."
                        : "An error occurred while signing up. " +
                            "Make sure you have entered a valid email and password."}
            </div>
            }
        </div>
    )
}

export default SignUp;