import React from 'react';
import HrProfileDetail from '../components/HrList/HrProfileDetails';
import Header from '../components/shared/Header';
import UserProfileDetail from '../components/UserProfileDetails';

export default function MyProfilePage() {
  const hr = false;
  return (
    <div>
      <Header />
      {/* if user is hr then only show hr profile */}
      {hr ? <HrProfileDetail /> : <UserProfileDetail />}
    </div>
  );
}
