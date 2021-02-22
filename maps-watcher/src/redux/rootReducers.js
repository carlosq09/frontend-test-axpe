import { combineReducers } from 'redux';
import autocomplete from './AutoComplete/Reducer';
import suggestions from './Markers/Reducer';
import map from './Map/Reducer';

const rootReducer = combineReducers({
    autocomplete,
    suggestions,
    map
})

export default rootReducer;