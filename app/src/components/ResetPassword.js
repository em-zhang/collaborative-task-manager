import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function ResetPassword(props) {
    const [resetEmail, setResetEmail] = useState("");
    const [resetEmailSuccess, setResetEmailSuccess] = useState(false);
    let errorCode = "";
    let errorMessage = "";

    return (
        <div>
            <div>
                Forgot your password?
                Send reset email.
            </div>
            <input
                className="reset-email-input"
                value={resetEmail}
                onChange={e => setResetEmail(e.target.value)}
                placeholder="email"
                type="email"
            />
            <button
                className="reset-password-button"
                onClick={() => sendPasswordResetEmail(props.auth, resetEmail)
                    .then(() => {
                        console.log("password reset email sent to ", resetEmail)
                    })
                    .catch((error) => {
                        errorCode = error.code;
                        errorMessage = error.message;
                    })
                }>
                Send
            </button>
        </div>
    )
}

export default ResetPassword;