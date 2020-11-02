import React, { useEffect, useRef, useState } from 'react';
import { ItemList } from '../component/ItemList';
import { localStorageList } from '../utils/localStorage';
import { Header } from './../component/Header';
import { getSessionStorage } from './../utils/sessionStorage';

export const Home = () => {
  const cartItems = getSessionStorage('cart') ? getSessionStorage('cart') : 0;
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
    <div>
      <Header cart={cartItems} />
      <div className='wrapper'>
        <div className='l-paddingY-48'>
          <ItemList list={list} />
        </div>
      </div>
    </div>
  );
};
