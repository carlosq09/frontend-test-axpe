import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import fetchAutoComplete from '../../redux/actions/AutocompleteAction'

import SuggestionList from './SuggestionList'
import SuggestionInput from './SuggestionInput'

const SuggestionBar = () => {
    const query = useSelector(state => state.autocomplete.query);
    const dispatch = useDispatch();

    const handleSetSuggestion = () => {

    }

    const handleAutocomplete = () => {

    }

    return (
        <div className="search-bar">
            <SuggestionInput query={query} autocomplete={ handleAutocomplete} />
            <SuggestionList setSuggestion={handleSetSuggestion} />
        </div >
    );
}

export default SuggestionBar