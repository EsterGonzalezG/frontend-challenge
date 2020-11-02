import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { ButtonBackToHome } from './ButtonBackToHome';
import { Select } from './Select';

export const Actions = ({ product, setColor, setStorage, addProductCart }) => {
  useEffect(() => {
    if (Object.entries(product).length) {
      setColor(product?.options?.colors[0].code);
      setStorage(product?.options?.storages[0].code);
    }
  }, [setColor, setStorage, product]);

  return (
    <form className='actions'>
      <label className='actions-label l-flexCenterAround l-marginBottom-24'>
        <Select options={product?.options?.colors} name='Color' setOptionsValue={setColor} />
        <Select options={product?.options?.storages} name='Almacenamiento' setOptionsValue={setStorage} />
      </label>
      <div className='l-flexCenterAround'>
        <button type='button' onClick={addProductCart} className='Button Button--primary'>
          Añadir
        </button>
        <ButtonBackToHome>Volver</ButtonBackToHome>
      </div>
    </form>
  );
};

Actions.prototype = {
  product: PropTypes.shape({
    options: PropTypes.shape({
      colors: PropTypes.array,
      storages: PropTypes.array,
    }),
  }),
  setColor: PropTypes.func,
  setStorage: PropTypes.func,
  addProductCart: PropTypes.func,
};
