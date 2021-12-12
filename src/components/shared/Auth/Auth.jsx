import React, { useState } from 'react';
import ButtonPrimary from '../../Buttons/ButtonPrimary';
import { NavLink, Link } from 'react-router-dom';
import './auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import NotificationPanel from '../../NotificationPanel';
import { useSelector } from 'react-redux';

var dropdownMenu = null;

export default function Auth(props) {
  const loggedIn = useSelector((state) => state.authentication.loggedIn);

  return (
    <div className='auth'>
      {loggedIn ? <LogedInUser /> : <LoginSignUpUser />}
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
  const authentication = useSelector((state) => state.authentication);
  return (
    <div
      className='dropdown'
      ref={(element) => {
        console.log(element);
        dropdownMenu = element;
        console.log(dropdownMenu);
      }}
    >
      {/** Based on user is route will be also changed */}
      {authentication.user.data.hasOwnProperty('hr') && (
        <li>
          <a href='/hrprofile'>My Profile</a>
        </li>
      )}

      {authentication.user.data.hasOwnProperty('admin') && (
        <li>
          <a href='/adminprofile'>My Profile</a>
        </li>
      )}
      {authentication.user.data.hasOwnProperty('admin') && (
        <li>
          <a href='/admin/upload/cv'>Upload CV</a>
        </li>
      )}

      {authentication.user.data.hasOwnProperty('user') && (
        <li>
          <a href='/userprofile'>My Profile</a>
        </li>
      )}

      {authentication.user.data.hasOwnProperty('user') && (
        <li>
          <a href='/user/upload/cv'>Upload CV</a>
        </li>
      )}
      {/* <li>
        <a href='/profile'>My Profile</a>
      </li> */}

      {/** When user is hr - route will be also changed */}
      {/* {(() => {
        switch (authentication.user.data.hasOwnProperty('hr')) {
          case 'admin':
            return '#FF0000';
          case 'hr':
            return '#00FF00';
          case 'user':
            return '#0000FF';
          default:
            return '#FFFFFF';
        }
      })()} */}
      {authentication.user.data.hasOwnProperty('hr') && (
        <li>
          <a href='/hrdashboard'>My Dashboard</a>
        </li>
      )}

      {authentication.user.data.hasOwnProperty('admin') && (
        <li>
          <a href='/admindashboard'>My Dashboard</a>
        </li>
      )}

      {authentication.user.data.hasOwnProperty('user') && (
        <li>
          <a href='/userdashboard'>My Dashboard</a>
        </li>
      )}

      <li>
        <Link to='/signin'>Logout</Link>
      </li>
    </div>
  );
}
