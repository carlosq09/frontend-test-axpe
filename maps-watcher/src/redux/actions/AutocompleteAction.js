import logic from '../../logic'

export const AUTOCOMPLETE_SUCCESS = 'AUTOCOMPLETE_SUCCESS';
export const AUTOCOMPLETE_FAILURE = 'AUTOCOMPLETE_FAILURE';
export const QUERY_SEARCH = 'QUERY_SEARCH';

export const fetchAutoCompleteSuccess = (results,input) => {
    debugger
    return {
        type: AUTOCOMPLETE_SUCCESS,
        payload: { 
            results, 
            input: input? input : '' 
        }
    }
}

export const fetchAutoCompleteFailure = (error) => {
    return {
        type: AUTOCOMPLETE_FAILURE,
        payload: error
    }
}

const fetchAutoComplete = (input) => {
    return dispatch => {
        logic.autocomplete(input).then(results =>{
            debugger
            dispatch(fetchAutoCompleteSuccess(results,input))
        }).catch(error => {
            dispatch(fetchAutoCompleteFailure(error))
        })
    }
}

export default fetchAutoComplete