import React from 'react'
//styles
import './index.scss'

const SearchListItem = ({ place, query, handleSetMarkers }) =>
    <li className='search-list__item' onClick={() => handleSetMarkers(place.place_id)} >
        {(() => {
            const { description } = place
            const ocurrence = description.toUpperCase().indexOf(query.toUpperCase());
            if (ocurrence >= 0) {
                return [description.substring(0, ocurrence), <strong key={place.place_id}>{description.substring(ocurrence, ocurrence + query.length)}</strong>, description.substring(ocurrence + query.length)]
            }
            return description
        })()}
    </li>

export default SearchListItem