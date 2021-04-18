import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import HrCatalog from '../components/HrList/HrCatalog';

export default function FindHR() {
  return (
    <div>
      <Header />
      <HrCatalog />
      <Footer />
    </div>
  );
}
