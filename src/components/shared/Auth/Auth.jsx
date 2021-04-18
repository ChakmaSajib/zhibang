import React, { useState } from 'react';
import ButtonPrimary from '../../Buttons/ButtonPrimary';
import { NavLink, useHistory } from 'react-router-dom';
import auth from '../../../mock/auth';
import './auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import DropDownMenu from '../../DropDownMenu';
import NotificationPanel from '../../NotificationPanel';

const authenticated = true;
var dropdownMenu = null;

export default function Auth(props) {
  return (
    <div className='auth'>
      {authenticated ? <LogedInUser /> : <LoginSignUpUser />}
    </div>
  );
}

function LoginSignUpUser() {
  return (
    <div>
      <NavLink to='/signin' activeClassName='' selected>
        Login
      </NavLink>
      <NavLink to='/signup'>
        <ButtonPrimary text='Sign Up' />
      </NavLink>
    </div>
  );
}

function LogedInUser() {
  const [open, setOpen] = useState(false);
  const [openNotification, setNotitification] = useState(false);

  const showMenu = (event) => {
    setOpen(true);
    document.addEventListener('click', showMenu);
  };

  const closeMenu = (event) => {
    setOpen(false);
    document.removeEventListener('click', closeMenu);
  };

  const handleNotification = (event) => {
    setNotitification(true);
    document.addEventListener('click', handleNotification);
  };
  const closeNotificationPanel = (event) => {
    setNotitification(false);
    document.removeEventListener('click', closeNotificationPanel);
  };

  React.useEffect(() => {
    if (open == true) {
      document.addEventListener('click', closeMenu);
    }
    if (openNotification == true) {
      document.addEventListener('click', closeNotificationPanel);
    }
  }, [open, openNotification]);

  return (
    <div className='loged-in-user'>
      <div className='notification-icon' onClick={handleNotification}>
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div
        className='user'
        onClick={showMenu}
        onKeyPress={showMenu}
        onClick={showMenu}
      >
        sc
      </div>
      {open ? <DropDown /> : null}
      {openNotification ? <NotificationPanel /> : null}
    </div>
  );
}

function DropDown() {
  return (
    <div
      className='dropdown'
      ref={(element) => {
        console.log(element);
        dropdownMenu = element;
        console.log(dropdownMenu);
      }}
    >
      <li>
        <a href='/profile'>My Profile</a>
      </li>
      <li>
        <a href='/dashboard'>My Dashboard</a>
      </li>
      <li>
        <a href=''>Logout</a>
      </li>
    </div>
  );
}
