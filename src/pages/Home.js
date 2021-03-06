import React, { useEffect, useRef, useState } from 'react';
import { ItemList, localStorageList, Search } from './index';
export const Home = () => {
  const isMountedRef = useRef(true);
  const [valueSearch, setValueSearch] = useState('');
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
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

  useEffect(() => {
    setFilterList(
      list.filter(
        ({ brand, model }) =>
          brand.toLowerCase().includes(valueSearch.toLocaleLowerCase()) ||
          model.toLowerCase().includes(valueSearch.toLocaleLowerCase()),
      ),
    );
  }, [valueSearch, list]);

  return (
    <>
      <div className='wrapper'>
        <div className='l-paddingY-48'>
          <Search setValueSearch={setValueSearch} />
          <ItemList list={filterList} />
        </div>
      </div>
    </>
  );
};
