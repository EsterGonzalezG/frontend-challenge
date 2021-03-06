import { setTitleDescription } from './../../utils/setTitleDescription';

describe('Test setTitleDescription', () => {
  test('should return empty array', () => {
    const objectDescription = {};
    const arrayDescription = setTitleDescription(objectDescription);
    expect(arrayDescription.length).toBe(0);
  });
  test('should return array', () => {
    const objectDescription = { brand: 'model' };
    const arrayDescription = setTitleDescription(objectDescription);
    expect(arrayDescription.length).toBe(1);
    expect(arrayDescription[0].id).toBe('Brand');
  });
});
