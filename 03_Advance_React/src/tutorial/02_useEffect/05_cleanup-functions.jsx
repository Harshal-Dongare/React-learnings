import { useEffect, useState } from "react";

const CleanupFunction = () => {
    const [toggle, setToggle] = useState(false);
    console.log("render from parent component");
    return (
        <>
            <button className="btn" onClick={() => setToggle(!toggle)}>
                Toggle Component
            </button>

            {toggle && <RandomComponent />}
        </>
    );
};

const RandomComponent = () => {
    useEffect(() => {
        // console.log("hello, this is interesting");
        // const intID = setInterval(() => {
        //     console.log("hello, this is interesting");
        // }, 1000);

        // return () => clearInterval(intID);

        const someFunc = () => {};
        window.addEventListener("scroll", someFunc);

        return () => window.removeEventListener("scroll", someFunc);
    }, []);
    return <h1>Hello there!</h1>;
};

export default CleanupFunction;
