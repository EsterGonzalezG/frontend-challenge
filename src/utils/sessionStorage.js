export const getSessionStorage = (key) => {
  try {
    return sessionStorage.getItem(key);
  } catch (error) {
    throw error;
  }
};

export const setSessionStorage = (key, initialValue) => {
  try {
    return sessionStorage.setItem(key, initialValue);
  } catch (error) {
    throw error;
  }
};
