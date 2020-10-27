import React from 'react';

import { Title } from './Title';
import { Breadcrumbs } from './Breadcrumbs';
import {ItemCard}  from './ItemCart'
export const Header = () => (
    <div className='header l-marginBottom-24'>
        <div className='header-content'>
        <Title>Tienda de móbiles</Title>
        <Breadcrumbs/>
        </div>
        <ItemCard/>
    </div>
)


