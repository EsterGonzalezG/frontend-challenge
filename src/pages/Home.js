import React, { useEffect, useRef, useState } from 'react';
import { ItemList, localStorageList } from './index';
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
    <>
      <div className='wrapper'>
        <div className='l-paddingY-48'>
          <ItemList list={list} />
        </div>
      </div>
    </>
  );
};
