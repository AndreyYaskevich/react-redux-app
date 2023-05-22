const handleError = () => {};

const handleResponse = response => {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 400) {
    const error = response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
};

export {handleError, handleResponse};
