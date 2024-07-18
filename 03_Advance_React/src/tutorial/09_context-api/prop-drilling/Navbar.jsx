import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [user, setUser] = useState({ name: "Harshal" });
    const logout = () => {
        setUser(!user);
    };
    return (
        <nav className="navbar">
            <h5>CONTEXT API</h5>
            <NavLinks user={user} logout={logout} />
        </nav>
    );
};

export default Navbar;
