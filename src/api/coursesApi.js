import {handleError, handleResponse} from './utils';

const baseUrl = process.env.API_URL + '/courses/';

const getCourses = async () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};

const saveCourse = async course => {
  return fetch(baseUrl + (course.id || ''), {
    method: course.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
};

const deleteCourse = async courseId => {
  return fetch(baseUrl + courseId, {
    method: 'DELETE'
  });
};

export {getCourses, saveCourse, deleteCourse};
