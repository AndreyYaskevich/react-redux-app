import * as types from '../../actions/api/actionTypes';
import initialState from '../initialState';

const actionTypeEndsInSuccess = type => {
  return type.substring(type.length - 8) === '_SUCCESS';
};

export const apiCallStatusReducer = (
  state = initialState.apiCallsInProgress,
  action
) => {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    actionTypeEndsInSuccess(action.type) ||
    action.type === types.API_CALL_ERROR
  ) {
    return state - 1;
  }
  return state;
};
