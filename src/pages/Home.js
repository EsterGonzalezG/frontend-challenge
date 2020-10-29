import React from 'react';

import { ItemList } from '../component/ItemList';
import { Search } from '../component/Search';
import { localStorageList } from '../utils/localStorage';

export const Home = () => {
  const list = localStorageList();

  return (
    <div>
      <Search />
      <ItemList list={JSON.parse(list)} />
    </div>
  );
};
