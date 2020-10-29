import { getProductList } from '../services/getProducts';

function getLocalStorage(name) {
  return localStorage.getItem(name);
}

function setLocalStorage(name, data) {
  return localStorage.setItem(name, JSON.stringify(data));
}

export const localStorageList = () => {
  const now = Date.now();
  const requestHours = parseInt(getLocalStorage('time'));
  const requestHoursTimeOut = requestHours + 3600;

  if (localStorage.getItem('list')) {
    if (now <= requestHoursTimeOut) {
      getProductList().then((data) => {
        localStorage.setItem('list', data);
      });
      setLocalStorage('time', now);
    }
  } else {
    getProductList().then((data) => {
      console.log(JSON.stringify(data));
      setLocalStorage('list', data);
    });
    setLocalStorage('time', now);
  }
  return getLocalStorage('list');
};
