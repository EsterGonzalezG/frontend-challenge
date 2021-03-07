import { getProductList } from './../../services/getProducts';
describe('Test getProducts utils', () => {
  const api = 'https://front-test-api.herokuapp.com/api/product';
  test('should be getProducts return', async () => {
    await getProductList(api).then((data) => {
      expect(data.length).toBeGreaterThan(0);
      expect(data.length).toBe(100);
    });
  });
});
