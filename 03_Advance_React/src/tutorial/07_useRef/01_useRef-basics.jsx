import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
    const [value, setValue] = useState(0);

    const refContainer = useRef(null);
    // console.log(refContainer);
    const isMounted = useRef(false);

    // to focus input on initial render
    useEffect(() => {
        // Below function will focus input on initial render
        refContainer.current.focus();
    });

    // do not want Function Execution on Initial Render
    useEffect(() => {
        // Function will not run on initial render
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        console.log("re-render");
    }, [value]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // to access DOM elements
        const name = refContainer.current.value;
        console.log(name);
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        ref={refContainer}
                        id="name"
                        className="form-input"
                    />
                </div>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
            <h1>value : {value}</h1>
            <button onClick={() => setValue(value + 1)} className="btn">
                increase
            </button>
        </div>
    );
};

export default UseRefBasics;

// Use cases of useRef
// 1. to access DOM elements
// 2. to focus input on initial render
// 3. Don not want Function Execution on Initial Render
// 4. Prevent re-renders on initial render.
