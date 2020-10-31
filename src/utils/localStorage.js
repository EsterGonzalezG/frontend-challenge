import { getProductList } from '../services/getProducts';

function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

function setLocalStorage(name, data) {
  return localStorage.setItem(name, JSON.stringify(data));
}

function getExpirationDate() {
  const oneHour = 3600 * 1000;
  return Date.now() + oneHour;
}

async function cacheData() {
  const products = await getProductList();
  setLocalStorage('list', products);
  setLocalStorage('expired', getExpirationDate());
  return products;
}

export const localStorageList = async () => {
  const now = Date.now(); //milliseconds
  const requestHours = parseInt(getLocalStorage('expired'));
  const storedList = getLocalStorage('list');
  let dataToReturn;

  if (storedList && now < requestHours) {
    dataToReturn = storedList;
  } else {
    dataToReturn = await cacheData();
  }
  return dataToReturn;
};
