import logic from '../../logic'

export const REMOVE_SUGGESTION = 'REMOVE_SUGGESTION';
export const ADD_SUGGESTION = 'ADD_SUGGESTION';

export const removeSuggestions = (placeId) => {
    return {
        type: REMOVE_SUGGESTION,
        payload: placeId
    }
}

export const addSuggestions = (placeId, map) => {
    return dispatch => {
        logic.getDetailsfromId(placeId, map).then(place_details => {
            dispatch({
                type: ADD_SUGGESTION,
                payload: place_details
            })
        })
    }
}