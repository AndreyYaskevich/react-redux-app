import * as authorsApi from '../../../api/authors/index';
import {API_CALL_ERROR, BEGIN_API_CALL} from '../api/actionTypes';
import {LOAD_AUTHORS_SUCCESS} from './actionTypes';

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
