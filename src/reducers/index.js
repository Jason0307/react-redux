import { combineReducers } from 'redux';
import scopes from './ScopeReducer';

const rootReducer = combineReducers({
    scopes
});

export default rootReducer;