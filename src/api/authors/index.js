import {handleError, handleResponse} from '../utils';

const baseUrl = process.env.API_URL + '/authors/';

const getAuthors = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};

export {getAuthors};
