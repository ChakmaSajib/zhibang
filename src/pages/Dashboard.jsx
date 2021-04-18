import React from 'react';
import UserDashboard from './UserDashboard';
import HrDashboard from './HrDashboard';
import SuperAdmin from '../components/SuperAdmin';
export default function Dashboard() {
  const hr = false;

  //  <HrDashboard />
  return <div>{hr ? <SuperAdmin /> : <UserDashboard />}</div>;
}
