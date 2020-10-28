import React from 'react';

import ItemList from '../component/ItemList';
import { Search } from '../component/Search';

export const Home = () => (
  <div>
    <Search />
    <ItemList />
  </div>
);
