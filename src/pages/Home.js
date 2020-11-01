import React, { useEffect, useRef, useState } from 'react';
import { ItemList } from '../component/ItemList';
import { localStorageList } from '../utils/localStorage';
import { Header } from './../component/Header';
import { getSessionStorage } from './../utils/sessionStorage';

export const Home = () => {
  const cartItems = getSessionStorage('cart');
  const [list, setList] = useState([]);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    localStorageList().then((productList) => {
      if (isMountedRef.current) {
        setList(productList);
      }
    });

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <div className='l-marginTop-200'>
      <Header cart={cartItems} />
      <ItemList list={list} />
    </div>
  );
};
