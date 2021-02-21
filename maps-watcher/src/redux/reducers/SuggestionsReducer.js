import { ADD_SUGGESTION, REMOVE_SUGGESTION } from "../actions/SuggestionsAction";

// Reducer
function suggestions(state = [], action = {}) {
    switch (action.type) {
        case ADD_SUGGESTION:
            debugger
            return [...state, action.payload]
            

        case REMOVE_SUGGESTION:
            return state.filter(place => place.placeId !== action.payload)

        default: return state;
    }
}

export default suggestions;