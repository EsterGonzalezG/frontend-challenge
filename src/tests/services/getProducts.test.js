import { getProductList } from './../../services/getProducts';
describe('Test getProducts utils', () => {
  test('should be getProducts return', async () => {
    const data = await getProductList();
    expect(data.length).toBe(100);
  });
});
