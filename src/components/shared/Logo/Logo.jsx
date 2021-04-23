import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/app-logo.svg';
import './logo.scss';

export default function Logo() {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
    </div>
  );
}
