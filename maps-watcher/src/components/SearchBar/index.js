import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//actions
import { fetchAutoComplete, clear } from '../../redux/AutoComplete/Action'
//components
import SearchList from './SearchList'
import SearchInput from './SearchInput'
//styles
import './index.scss'

const SearchBar = () => {
    const dispatch = useDispatch();
    const query = useSelector(state => state.autocomplete.query);
    
    const handleAutocomplete = (_query) => {
        dispatch(fetchAutoComplete(_query))
        if(_query == '') {
            dispatch(clear())
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