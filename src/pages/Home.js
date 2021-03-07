import React, { useEffect, useRef, useState } from 'react';
import { ItemList, localStorageList, Search } from './index';
export const Home = () => {
  const isMountedRef = useRef(true);
  const [valueSearch, setValueSearch] = useState('');
  const [list, setList] = useState({ data: [], loading: true });
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    localStorageList().then((productList) => {
      if (isMountedRef.current) {
        setList({ data: productList, loading: false });
      }
    });
  }, []);

  useEffect(() => {
    setFilterList(
      list?.data?.filter(
        ({ brand, model }) =>
          brand.toLowerCase().includes(valueSearch.toLocaleLowerCase().trim()) ||
          model.toLowerCase().includes(valueSearch.toLocaleLowerCase().trim()),
      ),
    );
  }, [valueSearch, list.data]);

  return (
    <div className='wrapper'>
      <div className='l-content-wide'>
        <div className='l-paddingY-48'>
          <Search setValueSearch={setValueSearch} />
          <ItemList list={filterList} loading={list.loading} />
        </div>
      </div>
    </div>
  );
};
