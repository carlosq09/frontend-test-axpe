import React from 'react'
import {useSelector} from 'react-redux'

const SuggestionList = ({ handleMarker }) => {
    const suggestionList = useSelector(state => state.autocomplete.results);

    return (
        <ul>
            {suggestionList && suggestionList.map((suggestion) => {
                return <li onClick={() => {
                    handleMarker(suggestion.place_id)
                }} >{suggestion.description}</li>
            })}
        </ul>
    );
}

export default SuggestionList