import React from 'react';
import Auth from '../Auth/Auth';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './header.scss';

export default function Header() {
  return (
    <div className='side-header'>
      <div className='container'>
        <div className='header'>
          <Logo />
          <Menu />
          <Auth />
        </div>
      </div>
    </div>
  );
}
