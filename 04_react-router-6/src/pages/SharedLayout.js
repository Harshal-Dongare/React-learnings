import { Link, Outlet } from "react-router-dom";
import StyleNavbar from "../components/StyleNavbar";

const SharedLayout = () => {
    return (
        <>
            <StyleNavbar />
            <Outlet />
        </>
    );
};
export default SharedLayout;
