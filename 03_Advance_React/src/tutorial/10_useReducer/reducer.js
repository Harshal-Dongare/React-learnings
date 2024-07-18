import { CLEAR_LIST, REMOVE, RESET } from "./action";
import { data } from "../../data";

export const defaultState = {
    people: data,
};

const reducer = (state, action) => {
    switch (action.type) {
        case CLEAR_LIST:
            return { ...state, people: [] };
        case RESET:
            return { ...state, people: data };
        case REMOVE:
            return {
                ...state,
                people: state.people.filter(
                    ({ id }) => id !== action.payload.id
                ),
            };
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default reducer;
