export const getSessionStorage = (name) => {
  try {
    return sessionStorage.getItem(name);
  } catch (error) {
    throw error;
  }
};

export const setSessionStorage = (name, cartItems) => {
  try {
    return sessionStorage.setItem(name, cartItems);
  } catch (error) {
    throw error;
  }
};
