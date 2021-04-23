import React from 'react';
import Header from '../components/shared/Header';
import { useSelector } from 'react-redux';
import UserProfileDetails from '../components/UserProfileDetails';
import Footer from '../components/shared/Footer';

export default function UserProfile() {
  const data = useSelector((state) => state.authentication.user.data);
  console.log(data);

  return (
    <div>
      <Header />
      <UserProfileDetails />
      <Footer />
    </div>
  );
}
