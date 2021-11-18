import './Alert.css';

if ((document.getElementById('alert-cancel') && document.getElementById('alert-cancel').hasFocus())) {
    console.log("on cancel");
}

function Alert(props) {
    return (
        <div className={"backdrop"}>
            <div id="modal">
                {props.children}
                <div className="alert-buttons">
                    <button tabIndex="0"
                            id="alert-ok"
                            onClick={() => {
                                props.onOK();
                                props.onClose()
                            }}
                            onKeyDown={e => {
                                if (e.keyCode === 9) {
                                    e.preventDefault();
                                    document.getElementById("alert-cancel").focus();
                                }
                            }}
                    >
                        OK
                    </button>

                    <button tabIndex="0"
                            className="alert-button"
                            id="alert-cancel"
                            onClick={() => props.onClose()}
                            onKeyDown={e => {
                                if(e.keyCode == 9) {
                                    e.preventDefault();
                                    document.getElementById("alert-ok").focus();
                                }
                            }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Alert;