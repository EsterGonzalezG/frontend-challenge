import React from 'react';
import { Header } from '../component/Header';
import { ItemList } from '../component/ItemList';
import { localStorageList } from '../utils/localStorage';

export const Home = () => {
  const list = localStorageList();

  return (
    <div>
      <Header />
      <ItemList list={JSON.parse(list)} />
    </div>
  );
};
