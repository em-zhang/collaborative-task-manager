import {useState} from "react"
import {sendPasswordResetEmail} from "firebase/auth";
import "./ResetPassword.css"

function ResetPassword(props) {
    const [resetEmail, setResetEmail] = useState("");
    const [resetEmailSuccess, setResetEmailSuccess] = useState(false);
    const [err, setErr] = useState(null);

    function disableMessage() {
        setResetEmailSuccess(false)
        setErr(null);
    }
    return (
        <div>
            <div className="reset-backdrop">
                <div className="reset-modal">
                    {props.children}
                    <div id="pass-reset-top">
                        <div id="pass-reset-title">Password Reset</div>
                        <div>
                            <button tabIndex="0"
                                    className="cancel-reset-button"
                                    onClick={() => props.onClose()}
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <div id="forgot-msg">
                        Forgot your password?
                        Send a reset email to reset it.
                    </div>
                    <div>
                        <input
                            className="reset-email-input"
                            value={resetEmail}
                            onChange={e => setResetEmail(e.target.value)}
                            onFocus={() => disableMessage()}
                            placeholder="email"
                            type="email"
                            onKeyPress={e => {
                                if (resetEmail !== "") {
                                    if (e.key === "Enter") {
                                        sendPasswordResetEmail(props.auth, resetEmail)
                                            .then(() => {
                                                setResetEmailSuccess(true);
                                            })
                                            .catch((error) => {
                                                setResetEmailSuccess(false);
                                                setErr(error);
                                            })
                                    }
                                }
                            }}

                        />
                    </div>
                    <div>
                        <button
                            className="reset-password-button"
                            onClick={() => sendPasswordResetEmail(props.auth, resetEmail)
                                .then(() => {
                                setResetEmailSuccess(true);
                            })
                                .catch((error) => {
                                setResetEmailSuccess(false);
                                setErr(error);
                            })
                            }>
                            Send
                        </button>
                    </div>
                    <br/>
                    {resetEmailSuccess ?
                        <div className="success-msg">
                            Reset email successfully sent.
                        </div>
                    : null}
                    {err ?
                        <div className="success-msg">
                            An error occurred.
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;