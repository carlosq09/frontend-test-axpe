import React, { Fragment, useState, useEffect } from 'react'
import SuggestionList from '../SuggestionList'
import logic from '../../logic'

const SuggestionBar = ({ google }) => {
    const [results, setResults] = useState('')
    const handleFetch = (query) => {
        logic.autocomplete(query).then(settheState)
    }

    return (
        <Fragment>
            <label>Search:</label>
            <input name='search' type='text' onChange={(e) => {
                e.preventDefault();
                
                handleFetch(e.target.value)
            }}></input>
            <SuggestionList list={results}/>
        </Fragment >
    );
}

export default SuggestionBar