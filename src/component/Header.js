import React from 'react';

import { Title } from './Title';

import { ItemCard } from './ItemCart';
import { Breadcrumbs } from './Breadcrumbs';

export const Header = (props) => (
  <div>
    <div className='header l-marginBottom-24'>
      <div className='header-content'>
        <Title>Tienda de móbiles</Title>
      </div>
      <ItemCard />
    </div>
    <Breadcrumbs crumbs={props.crumbs} />
  </div>
);
