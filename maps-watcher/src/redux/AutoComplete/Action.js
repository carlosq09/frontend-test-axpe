import logic from '../../logic'

export const AUTOCOMPLETE_SUCCESS = 'AUTOCOMPLETE_SUCCESS';
export const AUTOCOMPLETE_FAILURE = 'AUTOCOMPLETE_FAILURE';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';

const fetchAutoCompleteSuccess = (results, query) => {
    return {
        type: AUTOCOMPLETE_SUCCESS,
        payload: { 
            results,
            query
        }
    }
}

const fetchAutoCompleteFailure = (error) => {
    return {
        type: AUTOCOMPLETE_FAILURE,
        payload: error
    }
}

export const fetchAutoComplete = (query) => {
    return dispatch => {
        logic.autocomplete(query).then(results =>{
            logic.setInStorage(results, query)
            dispatch(fetchAutoCompleteSuccess(results,query))
        }).catch(error => {
            dispatch(fetchAutoCompleteFailure(error))
        })
    }
}

export const clear = () => {
     return {
        type: CLEAR_RESULTS,
        payload: []
    }
}

export default fetchAutoComplete