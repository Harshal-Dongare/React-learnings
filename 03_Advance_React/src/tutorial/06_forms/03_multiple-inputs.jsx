import { useState } from "react";

const MultipleInputs = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Multiple Inputs</h4>
                {/* name */}
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        onChange={handleInput}
                        value={user.name}
                        type="text"
                        className="form-input"
                        id="name"
                        name="name"
                    />
                </div>
                {/* email */}
                <div className="form-row">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        onChange={handleInput}
                        value={user.email}
                        type="email"
                        className="form-input"
                        id="email"
                        name="email"
                    />
                </div>
                {/* email */}
                <div className="form-row">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        onChange={handleInput}
                        value={user.password}
                        type="password"
                        className="form-input"
                        id="password"
                        name="password"
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </div>
    );
};
export default MultipleInputs;
