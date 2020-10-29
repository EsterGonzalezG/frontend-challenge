import React from 'react';

export const Actions = ({ product, setColor, setStorage }) => (
  <div>
    {
      <form action=''>
        <div className='color_container'>
          <label htmlFor='color'>Color:</label>
          <select name='color' id='color' value={product.colors} onChange={(event) => setColor(event.target.value)}>
            {product.options
              ? product.options.colors.map((color, index) =>
                  index === 0 ? (
                    <option value={color.code} key={index} defaultValue={color.name}>
                      {color.name}
                    </option>
                  ) : (
                    <option value={color.code} key={index}>
                      {color.name}
                    </option>
                  ),
                )
              : ''}
          </select>
        </div>
        <div className='storage_container'>
          <label htmlFor='storage'>Almacenamiento:</label>
          <select
            name='storage'
            id='storage'
            value={product.storage}
            onChange={(event) => setStorage(event.target.value)}
          >
            {product.options
              ? product.options.storages.map((storage, index) =>
                  index === 0 ? (
                    <option value={storage.code} key={index} defaultValue={storage.name}>
                      {storage.name}
                    </option>
                  ) : (
                    <option value={storage.code} key={index}>
                      {storage.name}
                    </option>
                  ),
                )
              : ''}
          </select>
        </div>
      </form>
    }
    <button>Añadir</button>
  </div>
);
