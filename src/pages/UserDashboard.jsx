import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import MyProfile from '../components/MyProfile';
import HrProfileDetails from '../components/HrList/HrProfileDetails';
import MockInterviewRequested from '../components/HrList/MockInterviewRequested';
import MockInterviewAfterAccept from '../components/HrList/MockInterviewAfterAccept';
import DashboardUser from '../components/DashboardUser';

export default function UserDashboard() {
  return (
    <div>
      <Header />
      <DashboardUser />
    </div>
  );
}
