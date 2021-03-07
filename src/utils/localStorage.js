import { getProductList } from '../services/getProducts';

export function getLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    throw error;
  }
}

export function setLocalStorage(key, initialValue) {
  try {
    return localStorage.setItem(key, JSON.stringify(initialValue));
  } catch (error) {
    throw error;
  }
}

export function getExpirationDate() {
  const oneHour = 3600 * 1000;
  return Date.now() + oneHour;
}

export async function cacheData() {
  const products = await getProductList();
  setLocalStorage('list', products);
  setLocalStorage('expired', getExpirationDate());
  return products;
}

export const localStorageList = async () => {
  const now = Date.now(); //milliseconds
  const requestHours = parseInt(JSON.parse(getLocalStorage('expired')));
  const storedList = JSON.parse(getLocalStorage('list'));
  let dataToReturn;

  if (storedList && now < requestHours) {
    dataToReturn = storedList;
  } else {
    dataToReturn = await cacheData();
  }
  return dataToReturn;
};
