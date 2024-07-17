import { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        // normally connect to DB
        setUser({ name: "Harshal" });
    };

    const logout = () => {
        setUser(null);
    };
    // implement login and logout functionality on a single button
    const handleButtonClick = () => {
        if (user) logout();
        else login();
    };

    return (
        <div>
            {user ? <h4>Hello {user.name}</h4> : <h4>Please login</h4>}
            <button className="btn" onClick={handleButtonClick}>
                {user ? "logout" : "login"}
            </button>
        </div>
    );
};

export default UserChallenge;
