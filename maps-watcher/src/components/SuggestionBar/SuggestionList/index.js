import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSuggestions } from '../../../redux/actions/SuggestionsAction'

const SuggestionList = () => {
    const dispatch = useDispatch()
    const suggestionList = useSelector(state => state.autocomplete.results);
    const map = useSelector(state => state.map);

    return (
        <ul>
            {suggestionList && suggestionList.map(suggestion => {
                debugger
                return <li key={suggestion.place_id} onClick={() => dispatch(addSuggestions(map,suggestion.place_id))} >
                    {suggestion.description}
                </li>
            })}
        </ul>
    );
}

export default SuggestionList