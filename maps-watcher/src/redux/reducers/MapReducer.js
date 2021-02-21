import { act } from "react-dom/test-utils";
import { SET_MAP_ENTITY } from "../actions/MapAction";

// Reducer
function map(state = null, action = {}) {
    switch (action.type) {
        case SET_MAP_ENTITY:
            return action.payload

        default: return state;
    }
}

export default map;