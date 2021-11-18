import './Alert.css';

function Alert(props) {
    return (
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <div className="alert-buttons">
                    <button tabindex="0"
                            className={"alert-button"} id={"alert-ok"} type={"button"}
                            onClick={() => {
                                props.onOK();
                                props.onClose()
                            }}>
                        OK
                    </button>
                    <button tabindex="0"
                            className={"alert-button"} id={"alert-cancel"} type={"button"}
                            onClick={() => props.onClose()}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Alert;