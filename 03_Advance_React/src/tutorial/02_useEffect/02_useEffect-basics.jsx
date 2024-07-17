import { useEffect, useState } from "react";
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    const sayHello = () => {
        console.log("hello there");
    };

    sayHello();

    // Do not use async on callback fuction of useEffect, as it returns a promise and useEffect is not okay with tha because, it also returns something called cleanup function.
    // rather, creater another function inside callback and use async with it

    useEffect(() => {
        console.log("Hello, useEffect");
    }, [value]);

    return (
        <div>
            <h1>value : {value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>
                click me
            </button>
        </div>
    );
};
export default UseEffectBasics;
