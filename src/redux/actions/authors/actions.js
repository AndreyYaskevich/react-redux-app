import * as authorsApi from '../../../api/authors/index';
import {LOAD_AUTHORS_SUCCESS} from './actionTypes';

export const loadAuthors = () => {
  return dispatch => {
    return authorsApi
      .getAuthors()
      .then(authors => {
        dispatch({
          type: LOAD_AUTHORS_SUCCESS,
          authors
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
