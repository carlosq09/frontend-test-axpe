import logic from '../../logic'
//constants
export const REMOVE_MARKER = 'REMOVE_MARKER';
export const ADD_MARKER = 'ADD_MARKER';

//actions
export const removeMarker = (placeId) => {
    debugger
    return {
        type: REMOVE_MARKER,
        payload: placeId
    }
}

export const addMarker = (map, placeId) => {
    return dispatch => {
        logic.getDetailsfromId(map, placeId).then(place_details => {
            dispatch({
                type: ADD_MARKER,
                payload: place_details
            })
        })
    }
}