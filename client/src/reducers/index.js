import { combineReducers } from 'redux';
import attacksReducer from './attacksReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    attackPatterns: attacksReducer,
    filters: filterReducer
})