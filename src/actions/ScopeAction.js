import ScopeApi from '../api/ScopeApi';
import * as types from './ActionTypes';

export function loadScopes() {
  return function(dispatch) {
    return ScopeApi.getAllScopes().then(scopes => {
      dispatch(loadScopesSuccess(scopes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadScopesSuccess(scopes) {
  return {type: types.LOAD_SCOPES, scopes};
}

