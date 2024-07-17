import { useState } from "react";
const UseStateBasics = () => {
    // const value = useState("HELLO")[0];
    // console.log(value);
    // const func = useState("HELLO")[1];
    // console.log(func);

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h4>You clicked {count} times</h4>
            <button type="button" className="btn" onClick={handleClick}>
                Increment
            </button>
        </div>
    );
};

export default UseStateBasics;
