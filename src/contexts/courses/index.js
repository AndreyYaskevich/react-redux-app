import React, {createContext, useMemo, useReducer} from 'react';
import generateState from './state';
import rootReducer from './reducers';
import PropTypes from 'prop-types';

export const CoursesContext = createContext();

const CoursesProvider = ({children}) => {
  const initialState = generateState();
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state]
  );

  return (
    <CoursesContext.Provider value={store}>{children}</CoursesContext.Provider>
  );
};

CoursesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default CoursesProvider;
