import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Actions } from '../component/Actions';
import { ButtonBackToHome } from '../component/ButtonBackToHome';
import { Description } from '../component/Description';
import { Image } from '../component/Image';
import { addProducts } from '../services/addProducts';
import { getProductId } from '../services/getProducts';
import { Header } from './../component/Header';
import { getSessionStorage, setSessionStorage } from './../utils/sessionStorage';

export const ProductDetails = () => {
  const id = useParams().mobileId;
  const isMountedRef = useRef(null);
  const [productDetail, setProductDetail] = useState({});
  const [colorCode, setColor] = useState('');
  const [storageCode, setStorage] = useState('');
  const [cart, setCart] = useState(() => (getSessionStorage('cart') ? parseInt(getSessionStorage('cart')) : null));

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
    <div className='productDetails'>
      <Header cart={cart} />
      <ButtonBackToHome>Volver Home </ButtonBackToHome>
      <Image item={productDetail} />
      <Description description={productDetail} />
      <Actions product={productDetail} setColor={setColor} setStorage={setStorage} addProductCart={addProductCart} />
    </div>
  );
};
