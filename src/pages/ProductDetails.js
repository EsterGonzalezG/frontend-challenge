import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Actions,
  addProducts,
  CartContext,
  Description,
  getProductId,
  Image,
  NotData,
  setSessionStorage,
  Subtitle,
  Title,
} from './index';
const ProductDetails = () => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get('id');
  const isMountedRef = useRef(true);
  const { setCart } = useContext(CartContext);
  const [productDetail, setProductDetail] = useState({});
  const [colorCode, setColor] = useState('');
  const [storageCode, setStorage] = useState('');
  const { code, model, imgUrl } = productDetail;

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    getProductId(id).then((data) => {
      if (isMountedRef.current) {
        setProductDetail(data);
      }
    });
  }, [id]);

  const addProductCart = useCallback(() => {
    addProducts({ id, colorCode, storageCode }).then(({ count }) => {
      setCart((current) => {
        setSessionStorage('cart', current + count);
        return current + count;
      });
    });
  }, [setCart, id, colorCode, storageCode]);

  if (code !== 0) {
    return (
      <div className='wrapper'>
        <div className='l-content-wide'>
          <div className='l-paddingY-24'>
            <Title>{model}</Title>
          </div>
          <div className='Card productDetails'>
            <div className='productDetails-img'>
              <Image image={imgUrl} model={model} />
            </div>
            <div className='productDetails-content'>
              <div className='productDetails-list'>
                <Subtitle>Characteristics:</Subtitle>
                <Description description={productDetail} />
              </div>
              <div className='l-paddingY-24'>
                <Subtitle>Select:</Subtitle>
                <Actions
                  product={productDetail}
                  setColor={setColor}
                  setStorage={setStorage}
                  addProductCart={addProductCart}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <NotData button={true} textButton={'Home'}>
        Sorry, at the moment there is no data to display{' '}
      </NotData>
    );
  }
};
export default ProductDetails;
