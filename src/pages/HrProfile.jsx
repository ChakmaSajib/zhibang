import React from 'react';
import HrProfileDetail from '../components/HrList/HrProfileDetails';
import Header from '../components/shared/Header';
import { useSelector } from 'react-redux';

export default function HrProfile() {
  const data = useSelector((state) => state.authentication.user.data);
  console.log(data);

  return (
    <div>
      <Header />
      <HrProfileDetail />
    </div>
  );
}

// const data = useSelector((state) => state.authentication.user.data);

// {
//   /* if user is hr then only show hr profile */
// }
// {
//   data.authority ? <HrProfileDetail /> : <UserProfileDetail />;
// }
