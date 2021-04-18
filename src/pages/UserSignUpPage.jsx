import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import UserSignUp from '../components/shared/Auth/UserSignUp';

export default function UserSignUpPage() {
  return (
    <div>
      <Header />
      <UserSignUp />
      {/* <Footer /> */}
    </div>
  );
}
