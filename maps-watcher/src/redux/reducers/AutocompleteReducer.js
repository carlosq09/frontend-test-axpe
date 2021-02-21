import { AUTOCOMPLETE_FAILURE, AUTOCOMPLETE_SUCCESS } from "../actions/AutocompleteAction";

const initialState = {
    results: [],
    query: '',
    error: ''
}

// Reducer
function autocomplete(state = initialState, action = {}) {
    switch (action.type) {
        case AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                results: action.payload.results,
                query: action.payload.query
            }

        case AUTOCOMPLETE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        // do reducer stuff
        default: return state;
    }
}

export default autocomplete;