import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Actions } from '../component/Actions';
import { ButtonBackToHome } from '../component/ButtonBackToHome';
import { Description } from '../component/Description';
import { Header } from '../component/Header';
import { Image } from '../component/Image';
import { getProductId } from '../services/getProducts';

export const ProductDetails = () => {
  const id = useParams();
  const isMountedRef = useRef(null);
  const [productDetail, setProductDetail] = useState([]);
  const [color, setColor] = useState('');
  const [storage, setStorage] = useState('');
  const [cart, setCart] = useState('');

  console.log('color', color, 'storage', storage);
  useEffect(() => {
    isMountedRef.current = true;
    getProductId(id.mobileId).then((data) => {
      if (isMountedRef.current) {
        setProductDetail(data);
      }
    });
    return () => (isMountedRef.current = false);
  }, [id.mobileId]);

  return (
    <div className='productDetails'>
      <Header />
      <ButtonBackToHome>Volver Home </ButtonBackToHome>
      <Image item={productDetail} />
      <Description description={productDetail} />
      <Actions product={productDetail} setColor={setColor} setStorage={setStorage} />
    </div>
  );
};
