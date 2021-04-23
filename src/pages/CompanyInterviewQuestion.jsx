import React from 'react';
import CompanyInterviewQuestions from '../components/CompanyInterviewQuestions';
import PageTitle from '../components/HrList/PageTitle';
import Interview from '../components/Interview';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function CompanyInterviewQuestion() {
  return (
    <div>
      <Header />
      <div className='catalog'>
        <PageTitle heading='Interview Catalog' />
      </div>
      <CompanyInterviewQuestions />
      <Footer />
    </div>
  );
}
