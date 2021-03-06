import React from 'react';
import { SiDsautomobiles } from 'react-icons/si';
import { Breadcrumbs, ItemCard, Title } from './index';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='l-flexAlignCenter l-marginBottom-16'>
          <span className='header-icon'>
            <SiDsautomobiles />
          </span>
          <Title>ShopMobile</Title>
        </div>
        <Breadcrumbs />
      </div>
      <ItemCard />
    </div>
  );
};
