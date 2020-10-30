const addCart = 'https://front-test-api.herokuapp.com/api/cart';

export const addProducts = async (add) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(add),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(addCart, config);
    const productCart = await response.json();
    return productCart;
  } catch (error) {
    throw error;
  }
};
