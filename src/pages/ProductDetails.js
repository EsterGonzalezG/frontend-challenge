import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Actions } from '../component/Actions';
import { Description } from '../component/Description';
import { Image } from '../component/Image';
import { addProducts } from '../services/addProducts';
import { getProductId } from '../services/getProducts';
import { Header } from './../component/Header';
import { NotData } from './../component/NotData';
import { Title } from './../component/Title';
import { getSessionStorage, setSessionStorage } from './../utils/sessionStorage';
const ProductDetails = () => {
  const id = useParams().mobileId;
  const isMountedRef = useRef(null);
  const [productDetail, setProductDetail] = useState({});
  const [colorCode, setColor] = useState('');
  const [storageCode, setStorage] = useState('');
  const [cart, setCart] = useState(() => (getSessionStorage('cart') ? parseInt(getSessionStorage('cart')) : 0));

  useEffect(() => {
    isMountedRef.current = true;
    getProductId(id).then((data) => {
      if (isMountedRef.current) {
        setProductDetail(data);
      }
    });

    return () => (isMountedRef.current = false);
  }, [id, cart]);

  const addProductCart = () => {
    addProducts({ id, colorCode, storageCode }).then((data) => {
      setCart((current) => {
        setSessionStorage('cart', current + data?.count);
        return current + data?.count;
      });
    });
  };

  return (
    <div>
      <Header cart={cart} />

      {productDetail?.code === 0 ? (
        <NotData>Sorry, at the moment there is no data to display </NotData>
      ) : (
        <div className='wrapper'>
          <div className='l-content-wide'>
            <div className='l-paddingY-48'>
              <Title>{productDetail.model}</Title>
            </div>
            <div className='Card productDetails'>
              <div className='productDetails-img'>
                <Image image={productDetail.imgUrl} model={productDetail.model} />
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
    </div>
  );
};
export default ProductDetails;
