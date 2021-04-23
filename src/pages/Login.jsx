import React from 'react';
import { useHistory } from 'react-router-dom';
import CommmonLogin from '../components/shared/Auth/Login';
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
      <CommmonLogin />
    </div>
  );
}
