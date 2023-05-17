const handleError = () => {};

const handleResponse = async response => {
  if (response.ok) {
    return await response.json();
  }
  if (response.status === 400) {
    const error = response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
};

export {handleError, handleResponse};
