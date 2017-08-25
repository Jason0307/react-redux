import * as types from '../actions/ActionTypes';  
import initialState from './initialState';

export default function scopeReducer(state = initialState.scopes, action) {  
  switch(action.type) {
    case types.LOAD_SCOPES:
      return action.scopes
    default: 
      return state;
  }
}