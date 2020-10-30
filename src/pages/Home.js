import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../component/Header';
import { ItemList } from '../component/ItemList';
import { localStorageList } from '../utils/localStorage';

export const Home = () => {
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
      <Header />
      <ItemList list={list} />
    </div>
  );
};
