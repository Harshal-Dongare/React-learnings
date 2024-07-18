import { useAppContext } from "./Navbar";

const UserContainer = () => {
    const { user, logout } = useAppContext();

    return (
        <div className="user-container">
            {user ? (
                <>
                    <p>Hello there, {user.name}</p>
                    <button className="btn" onClick={logout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <p>Login Please</p>
                </>
            )}
        </div>
    );
};

export default UserContainer;
