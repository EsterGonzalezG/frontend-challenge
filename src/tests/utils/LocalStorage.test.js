import { getProductList } from './../../services/getProducts';
import { cacheData, getExpirationDate, getLocalStorage, setLocalStorage } from './../../utils/localStorage';
describe('Test LocalStorage utils', () => {
  Storage.prototype.getItem = jest.fn(() => {});
  Storage.prototype.setItem = jest.fn(() => {});
  test('should be getExpirationDate return correct data', () => {
    const nowMoreOneHour = Date.now() + 3600 * 1000;
    expect(getExpirationDate()).toBe(nowMoreOneHour);
  });
  test('should be getLocalStorage called', () => {
    getLocalStorage('test');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  test('should be setLocalStorage called', () => {
    setLocalStorage('test');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  test('should be CacheData return', async () => {
    cacheData();
    const data = await getProductList();
    expect(data.length).toBe(100);
  });
});
