import { useState } from "react";
import { data } from "../../data";

const UserChallenge = () => {
    const [users, setUsers] = useState(data);
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        const newUser = { id: Date.now(), name };
        setUsers([...users, newUser]);
        setName("");
    };

    const deleteUser = (uid) => {
        const filteredUsers = users.filter(({ id }) => id !== uid);
        setUsers(filteredUsers);
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Add User</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        id="name"
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
            {/* render users below */}
            <h2>Users</h2>
            {users &&
                users.map(({ id, name }) => {
                    return (
                        <div key={id}>
                            <h4>{name}</h4>
                            <button
                                onClick={() => deleteUser(id)}
                                className="btn"
                            >
                                remove
                            </button>
                        </div>
                    );
                })}
        </div>
    );
};
export default UserChallenge;
