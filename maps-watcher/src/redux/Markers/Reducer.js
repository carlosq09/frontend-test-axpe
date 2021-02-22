import { ADD_MARKER, REMOVE_MARKER } from "./Action";

// Reducer
function suggestions(state = [], action = {}) {
    switch (action.type) {
        case ADD_MARKER:
            return [...state, action.payload]
            

        case REMOVE_MARKER:
            debugger
            return state.filter(place => place.place_id !== action.payload)

        default: return state;
    }
}

export default suggestions;