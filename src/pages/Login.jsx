import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonFullWidth from '../components/Buttons/ButtonFullWidth';
import ButtonPrimaryDanger from '../components/Buttons/ButtonPrimaryDanger';
import ButtonPrimaryWarning from '../components/Buttons/ButtonPrimaryWarning';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import ButtonSecondaryBlack from '../components/Buttons/ButtonSecondaryBlack';
import ButtonWithIcon from '../components/Buttons/ButtonWithIcon';
import DropDownMenu from '../components/DropDownMenu';
import NotificationPanel from '../components/NotificationPanel';
import UserLogin from '../components/shared/Auth/UserLogin';
import Header from '../components/shared/Header';
import auth from '../mock/auth';

export default function Login() {
  const history = useHistory();
  function handleClick() {
    console.log('button is clicked');
    auth.login(() => {
      history.push('/hr');
    });
  }
  return (
    <div>
      <Header />
      {/* <button type='button' onClick={handleClick}>
        Login
      </button> */}
      {/* <DropDownMenu />
      <NotificationPanel /> */}
      {/* <ButtonFullWidth text='login' />
      <ButtonPrimaryDanger text='cancel' />
      <ButtonPrimaryWarning text='warning' />
      <ButtonSecondary text='secondary' />
      <ButtonSecondaryBlack text='secondary black' /> */}
      {/* <ButtonWithIcon /> */}
      <UserLogin />
    </div>
  );
}
