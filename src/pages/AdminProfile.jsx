import React from 'react';

import Header from '../components/shared/Header';
import { useSelector } from 'react-redux';
import AdminProfileDetail from '../components/Admin/AdminProfileDetail';
import Footer from '../components/shared/Footer';

export default function AdminProfile() {
  const data = useSelector((state) => state.authentication.user.data);
  console.log(data);

  return (
    <div>
      <Header />
      <AdminProfileDetail />
    </div>
  );
}
