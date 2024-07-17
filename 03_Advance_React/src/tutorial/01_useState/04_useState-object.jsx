import { useState } from "react";

const UseStateObject = () => {
    const [user, setUser] = useState({
        name: "John",
        age: 30,
        hobby: "Singing",
    });

    const displayUser = () => {
        setUser({
            name: "Prajakta",
            age: 25,
            hobby: "Cooking",
        });
        // setUser("Harsh");
    };

    return (
        <>
            <h3>{user?.name}</h3>
            <h3>{user?.age}</h3>
            <h3>Enjoys: {user?.hobby}</h3>
            <button type="button" className="btn" onClick={displayUser}>
                Show John
            </button>
        </>
    );
};

export default UseStateObject;
