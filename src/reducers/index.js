import { combineReducers } from 'redux';
import attacksReducer from './attacksReducer';

export default combineReducers({
    attacks: attacksReducer
}