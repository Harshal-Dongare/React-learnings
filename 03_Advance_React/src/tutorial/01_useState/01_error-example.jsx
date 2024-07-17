const ErrorExample = () => {
    let count = 0;

    const increase = () => {
        count++;
    };

    return (
        <>
            <h1>Count : {count}</h1>
            <button type="button" onClick={increase} className="btn">
                Increase
            </button>
        </>
    );
};

export default ErrorExample;
