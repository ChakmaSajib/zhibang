import React from 'react';
import SingleHrProfile from '../components/HrList/SingleHrProfile';

import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function SingleHrPage() {
  return (
    <div>
      <Header />
      <SingleHrProfile />
      <Footer />
    </div>
  );
}
