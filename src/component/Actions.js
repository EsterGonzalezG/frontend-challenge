import React, { useEffect } from 'react';

export const Actions = ({ product, setColor, setStorage }) => {
  // const handleValue = (event) => console.log(event.target.options[event.target.selectedIndex].text);
  /*  const [p, setP] = useState(''); */
  useEffect(() => {
    console.log(product);
    if (Object.keys(product).length) {
      return setStorage(product?.options?.storages[0]);
    }
  }, [product]);
  return (
    <div>
      {
        <form action=''>
          <div className=''>
            <label htmlFor='color'>Color:</label>
            <select
              name='color'
              id='color'
              onChange={(event) => {
                setColor(event.target.value);
              }}
            >
              {product.options
                ? product.options.colors.map((color, index) => (
                    <option value={color.code} key={index}>
                      {color.name}
                    </option>
                  ))
                : ''}
            </select>
          </div>
          <div className=''>
            <label htmlFor='storage'>Almacenamiento:</label>
            <select name='storage' id='storage' onChange={(event) => setStorage(event.target.value)}>
              {product.options
                ? product.options.storages.map((storage, index) => (
                    <option value={storage.code} key={index}>
                      {storage.name}
                    </option>
                  ))
                : ''}
            </select>
          </div>
        </form>
      }
      <button>Añadir</button>
    </div>
  );
};
