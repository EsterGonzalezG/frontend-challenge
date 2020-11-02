import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';
import { ButtonBackToHome } from '../component/ButtonBackToHome';
export const NotFound = () => (
  <div className='notFount l-content-wide'>
    <span className='notFount-icon'>
      <FaRegSadCry />
    </span>
    <div className='notFount-text l-marginBottom-24'>UUUPPPSSS Sorry! This page is not available</div>
    <ButtonBackToHome>Home</ButtonBackToHome>
  </div>
);
