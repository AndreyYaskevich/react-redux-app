import {handleError, handleResponse} from '../utils';

const baseUrl = process.env.API_URL + '/courses/';

const getCourses = async () => {
  try {
    const response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (result) {
    return handleError(result);
  }
};

const saveCourse = async course => {
  try {
    const response = await fetch(baseUrl + (course.id || ''), {
      method: course.id ? 'PUT' : 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(course)
    });
    return handleResponse(response);
  } catch (result) {
    return handleError(result);
  }
};

export {getCourses, saveCourse};
