import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchAutoComplete from '../../../redux/actions/AutocompleteAction'

const SuggestionInput = ({ query, autocomplete }) => {
    const query = useSelector(state => state.autocomplete.query);
    const dispatch = useDispatch();

    return (
        <input name='search' value={query} type='text' onChange={(e) => autocomplete(e.target.value)} />
    );
}

export default SuggestionInput