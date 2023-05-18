import * as types from '../../actions/authors/actionTypes';

const authorReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};

export default authorReducer;
