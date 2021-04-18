import React from 'react';
import logo from '../../../assets/img/app-logo.svg';
import './logo.scss';

export default function Logo() {
  return (
    <div className='logo'>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>
    </div>
  );
}
