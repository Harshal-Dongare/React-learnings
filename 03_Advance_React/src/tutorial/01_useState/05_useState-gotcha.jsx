import { useState } from "react";

const UseStateGotcha = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            console.log("clicked the button");
            setCount((prev) => {
                return prev + 1;
            });
        }, 3000);
    };

    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick} className="btn">
                Click
            </button>
        </>
    );
};

export default UseStateGotcha;
