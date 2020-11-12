import React, { useEffect, useRef, useState } from 'react';
import { ItemList } from '../component/ItemList';
import { localStorageList } from '../utils/localStorage';
import { Header } from './../component/Header';

export const Home = () => {
  const isMountedRef = useRef(true);

  const [list, setList] = useState([]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    localStorageList().then((productList) => {
      if (isMountedRef.current) {
        setList(productList);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <div className='wrapper'>
        <div className='l-paddingY-48'>
          <ItemList list={list} />
        </div>
      </div>
    </div>
  );
};
