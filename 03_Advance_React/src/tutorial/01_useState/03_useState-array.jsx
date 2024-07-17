import { useState } from "react";
import { data } from "../../data";
const UseStateArray = () => {
    const [userData, setUserData] = useState(data);
    const handleRemove = (uId) => {
        const filteredData = userData.filter(({ id }) => id !== uId);
        setUserData(filteredData);
    };
    const handleClear = () => {
        setUserData([]);
    };
    return (
        <section>
            {userData?.map(({ name, id }) => {
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <button onClick={() => handleRemove(id)}>Remove</button>
                    </div>
                );
            })}

            <button onClick={handleClear} className="btn">
                Clear Items
            </button>
        </section>
    );
};

export default UseStateArray;
