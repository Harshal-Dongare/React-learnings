import { useState } from "react";

const ToggleChallenge = () => {
    const [showAlert, setShowAlert] = useState(false);

    const toggleChallenge = () => {
        setShowAlert(!showAlert);
    };

    return (
        <div>
            <button onClick={toggleChallenge} className="btn">
                toggle
            </button>
            {showAlert && <Alert />}
        </div>
    );
};

const Alert = () => {
    return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
