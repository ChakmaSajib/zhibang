import React from 'react';
import AnotherInterview from '../components/Anotherinterview';
import PageTitle from '../components/HrList/PageTitle';
import Interview from '../components/Interview';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function InterviewQuestion() {
  return (
    <div>
      <Header />
      <div className='catalog'>
        <PageTitle heading='Interview Catalog' />
      </div>
      <AnotherInterview />
      <Footer />
    </div>
  );
}
