import SignIn from "./SignIn.js"
import SignUp from "./SignUp"
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
                <div className="auth-header">
                    <TabList className="tabs">
                        <SignIn
                            key="Sign In"
                            auth={props.auth}
                            user={props.user}
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
export default AuthPage;