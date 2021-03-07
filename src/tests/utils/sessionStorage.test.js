import { getSessionStorage, setSessionStorage } from './../../utils/sessionStorage';
describe('Test SessionStorage utils', () => {
  Storage.prototype.getItem = jest.fn(() => {});
  Storage.prototype.setItem = jest.fn(() => {});
  test('should be getExpirationDate return correct data', () => {
    getSessionStorage('key');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  test('should be setSessionStorage called', () => {
    setSessionStorage('test', 1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
