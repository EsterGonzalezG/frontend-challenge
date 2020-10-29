const endpointProducts = 'https://front-test-api.herokuapp.com/api/product/';

export const getProductList = async () => {
  return await fetch(endpointProducts)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

export const getProductId = async (id) => {
  return await fetch(endpointProducts + id)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};
