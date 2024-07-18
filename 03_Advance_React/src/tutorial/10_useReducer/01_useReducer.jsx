import { useReducer } from "react";

import reducer, { defaultState } from "./reducer";

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    // console.log(state);

    const removeItem = (id) => {
        dispatch({ type: "REMOVE", payload: { id } });
        // let newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople);
    };

    const handleButton = (type) => {
        dispatch({ type });
        // if (type === "clear") {
        //     setPeople([]);
        // } else if (type === "reset") {
        //     setPeople(data);
        // }
    };

    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            <button
                className="btn"
                style={{ marginTop: "2rem" }}
                onClick={() =>
                    handleButton(state.people.length ? "CLEAR_LIST" : "RESET")
                }
            >
                {state.people.length ? "Clear items" : "Reset"}
            </button>
        </div>
    );
};

export default ReducerBasics;
