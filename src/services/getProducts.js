const endpointProducts = 'https://front-test-api.herokuapp.com/api/product/';

export const getProductList = async () => {
  try {
    let response = await fetch(endpointProducts);
    let data = await response.json();
    return data.map((productList) => productList);
  } catch (error) {
    throw error;
  }
};

export const getProductId = async (id) => {
  try {
    let response = await fetch(endpointProducts + id);
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
