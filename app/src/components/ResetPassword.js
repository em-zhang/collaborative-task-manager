import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./ResetPassword.css"

function ResetPassword(props) {
    const [resetEmail, setResetEmail] = useState("");
    const [resetEmailSuccess, setResetEmailSuccess] = useState(false);
    let errorCode = "";
    let errorMessage = "";

    console.log("error is ", errorCode, errorMessage);

    return (
        <div>
            <div>
                Forgot your password?
                Send a reset email.
            </div>
            <input
                className="reset-email-input"
                value={resetEmail}
                onChange={e => setResetEmail(e.target.value)}
                placeholder="email"
                type="email"
                onKeyPress={e => {
                    if (resetEmail !== "") {
                        if (e.key === "Enter") {
                            console.log("pressed enter");
                            sendPasswordResetEmail(props.auth, resetEmail)
                                .then(() => {
                                    console.log("password reset email sent to ", resetEmail)
                                    setResetEmailSuccess(true);
                                })
                                .catch((error) => {
                                    errorCode = error.code;
                                    errorMessage = error.message;
                                    setResetEmailSuccess(false);
                                    console.log("error is", errorMessage, errorCode)
                                })
                        }
                    }
                }}

            />
            <button
                className="reset-password-button"
                onClick={() => sendPasswordResetEmail(props.auth, resetEmail)
                    .then(() => {
                        console.log("password reset email sent to ", resetEmail)
                        setResetEmailSuccess(true);
                    })
                    .catch((error) => {
                        errorCode = error.code;
                        errorMessage = error.message;
                        setResetEmailSuccess(false);
                        console.log("error is ", errorCode, "error msg ", errorMessage)
                    })
                }>
                Send
            </button>
            {resetEmailSuccess &&
                <div>
                    Reset email successfully sent to {resetEmail}.
                </div>
            }
            {errorCode &&
            <div className="error-reset-password">
                { errorCode === 'auth/invalid-email'
                    ? "Please provide a valid email address."
                    : errorCode === 'auth/user-not-found'
                        ? "The email address was not found. Sign up instead?"
                            : "Some error occurred."
                }
            </div>
            }
        </div>
    )
}

export default ResetPassword;