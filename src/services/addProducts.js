const addCart = 'https://front-test-api.herokuapp.com/api/cart';

export const addProducts = (add) => {
  return fetch(addCart, {
    method: 'POST',
    body: JSON.stringifys(add),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => error);
};
