import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//actions
import { addMarker } from '../../../redux/Markers/Action'
import { clear } from '../../../redux/AutoComplete/Action'
//components
import SearchListItem from '../SearchListItem'
//styles
import './index.scss'

const SeachList = ({ query }) => {
    const dispatch = useDispatch();
    
    const map = useSelector(state => state.map);
    const placesList = useSelector(state => state.autocomplete.results);

    const handleSetMarkers = (place_id) => {
        dispatch(addMarker(map, place_id))
        dispatch(clear())
    }

    return (
        <ul className='search-list'>
            {placesList.map((suggestion) => 
                <SearchListItem key={suggestion.place_id} place={suggestion} query={query} handleSetMarkers={handleSetMarkers} />
            )}
        </ul>
    );
}

export default SeachList