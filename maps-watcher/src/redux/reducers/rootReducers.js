import { combineReducers } from 'redux';
import autocomplete from './AutocompleteReducer';
import suggestions from './SuggestionsReducer';
import map from './MapReducer';

const rootReducer = combineReducers({
    autocomplete,
    suggestions,
    map
})

export default rootReducer;