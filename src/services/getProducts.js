const endpointProducts = 'https://front-test-api.herokuapp.com/api/product/';

export const getProductList = async () => {
  try {
    const response = await fetch(endpointProducts);
    const data = await response.json();
    return data.map((productList) => productList);
  } catch (error) {
    throw error;
  }
};

export const getProductId = async (id) => {
  try {
    const response = await fetch(endpointProducts + id);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
