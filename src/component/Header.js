import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ItemCard } from './ItemCart';
import { Title } from './Title';

export const Header = (props) => (
  <div>
    <div className='header l-marginBottom-24'>
      <div className='header-content'>
        <Title>Tienda de móbiles</Title>
        <ItemCard />
      </div>
    </div>
    <ul>
      <Breadcrumbs crumbs={props.crumbs} />
    </ul>
  </div>
);
