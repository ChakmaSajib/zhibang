import React from 'react';
import CardsInHome from '../components/Cards/CardsInHome';
import Content from '../components/Typography/Content';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import HrInfoInHomePage from '../components/HrList/HrInfoInHomePage';
import ZhibangHome from '../components/HomePage/ZhibangHome';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <ZhibangHome />
      <HrInfoInHomePage />
      {/* <HowItWorks /> */}
      <Footer />
    </React.Fragment>
  );
}
