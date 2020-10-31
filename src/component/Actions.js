import React, { useEffect } from 'react';
import { Select } from './Select';
export const Actions = ({ product, setColor, setStorage, addProductCart }) => {
  useEffect(() => {
    if (Object.keys(product).length) {
      setColor(product?.options?.colors[0].code);
      setStorage(product?.options?.storages[0].code);
    }
  }, [setColor, setStorage, product]);

  return (
    <form>
      <Select options={product?.options?.colors} name='Color' setOptionsValue={setColor} />
      <Select options={product?.options?.storages} name='Almacenamiento' setOptionsValue={setStorage} />
      <button type='button' onClick={addProductCart}>
        Añadir
      </button>
    </form>
  );
};
