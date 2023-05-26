import * as authorsApi from '../../api/authorApi';
import {
  API_CALL_ERROR,
  BEGIN_API_CALL,
  LOAD_AUTHORS_SUCCESS
} from './actionTypes';

export const loadAuthors = () => {
  return dispatch => {
    dispatch({
      type: BEGIN_API_CALL
    });
    return authorsApi
      .getAuthors()
      .then(authors => {
        dispatch({
          type: LOAD_AUTHORS_SUCCESS,
          authors
        });
      })
      .catch(error => {
        dispatch({type: API_CALL_ERROR});
        throw error;
      });
  };
};
