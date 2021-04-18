import React from 'react';
import Employee from '../components/Employee';
import HrCatalog from '../components/HrList/HrCatalog';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import FindHR from './FindHR';

export default function MockInterview() {
  return (
    <div>
      <Header />
      <HrCatalog />
      <Footer />
    </div>
  );
}
