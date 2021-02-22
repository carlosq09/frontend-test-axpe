import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
//actions
import { fetchAutoComplete } from '../../redux/AutoComplete/Action'
//components
import SearchList from './SearchList'
import SearchInput from './SearchInput'
//styles
import './index.scss'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    
    const handleAutocomplete = (_query) => {
        setQuery(_query)
        dispatch(fetchAutoComplete(_query))
        if(_query == '') {
            setQuery('');
        }
    }

    return (
        <div className="search-bar"> 
            <SearchInput query={query} autocomplete={handleAutocomplete} />
            <SearchList query={query} />
        </div >
    );
}

export default SearchBar