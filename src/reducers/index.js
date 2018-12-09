import { combineReducers } from 'redux';
import attacksReducer from './attacksReducers';

export default combineReducers({
    attacks: attacksReducer
})