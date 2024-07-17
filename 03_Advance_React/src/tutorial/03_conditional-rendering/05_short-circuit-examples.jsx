import { useState } from "react";

const ShortCircuitExamples = () => {
    // falsy
    const [text, setText] = useState("");
    // truthy
    const [name, setName] = useState("susan");
    const [user, setUser] = useState({ name: "john" });
    const [isEditing, setIsEditing] = useState(false);

    // use || for showing text kinda value
    // use && for showing components

    return (
        <div>
            <h2>{text || "default value"}</h2>
            {text && (
                <div>
                    <h2>whatever return</h2>
                    <h2>{name}</h2>
                </div>
            )}
            {/* {!text && (
                <div>
                    <h2>whatever return</h2>
                    <h2>{name}</h2>
                </div>
            )} */}

            {user && <SomeComponent user={user} />}

            <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
            <button className="btn">{isEditing ? "edit" : "add"}</button>

            {user ? (
                <div>
                    <h4>hello there user {user.name}</h4>
                </div>
            ) : (
                <div>
                    <h4>You need to login</h4>
                </div>
            )}
        </div>
    );
};

const SomeComponent = ({ user: { name } }) => {
    return (
        <div>
            <h2>whatever return</h2>
            <h2>{name}</h2>
        </div>
    );
};

export default ShortCircuitExamples;
