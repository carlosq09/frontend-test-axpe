import { AUTOCOMPLETE_SUCCESS, CLEAR_RESULTS } from "./Action";

const initialState = {
    default_location: { //barcelona
        lat: 41.3879, 
        lng: 2.16992
    },
    results: [],
    query: ''
}

// Reducer
function autocomplete(state = initialState, action = {}) {
    switch (action.type) {
        case AUTOCOMPLETE_SUCCESS:
            debugger
            return {
                ...state,
                results: action.payload.results || [],
                query: action.payload.query
            }

        case CLEAR_RESULTS:
            return {
                ...state,
                query: '',
                results: []
            }

        default: return state;
    }
}

export default autocomplete;