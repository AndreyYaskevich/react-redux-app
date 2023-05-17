import {handleError, handleResponse} from '../utils';

const baseUrl = process.env.API_URL + '/courses/';

const getCourses = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};

export {getCourses};
