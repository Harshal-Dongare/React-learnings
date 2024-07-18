import { useState } from "react";

const ControlledInputs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // do something
        console.log(name, email);
        setName("");
        setEmail("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h4>controlled inputs</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="form-input"
                />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="form-input"
                />
            </div>
            <button type="submit" className="btn btn-block">
                Submit
            </button>
        </form>
    );
};
export default ControlledInputs;
