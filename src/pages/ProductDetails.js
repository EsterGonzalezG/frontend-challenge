import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Actions } from '../component/Actions';
import { Description } from '../component/Description';
import { Image } from '../component/Image';
import { addProducts } from '../services/addProducts';
import { getProductId } from '../services/getProducts';
import { CartContext } from '../useContext/CartContext';
import { NotData } from './../component/NotData';
import { Title } from './../component/Title';
import { setSessionStorage } from './../utils/sessionStorage';
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

  return (
    <>
      {code === 0 ? (
        <NotData>Sorry, at the moment there is no data to display </NotData>
      ) : (
        <div className='wrapper'>
          <div className='l-content-wide'>
            <div className='l-paddingY-48'>
              <Title>{model}</Title>
            </div>
            <div className='Card productDetails'>
              <div className='productDetails-img'>
                <Image image={imgUrl} model={model} />
              </div>
              <div className='productDetails-content'>
                <div className='productDetails-list'>
                  <Description description={productDetail} />
                </div>
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
      )}
    </>
  );
};
export default ProductDetails;
