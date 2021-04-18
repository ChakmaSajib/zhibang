import React from 'react';
import Card from './Card';
import './cardInHome.scss';

export default function CardsInHome() {
  return (
    <div className='container'>
      <div className='cardInHome'>
        <Card
          headingText='As an HR you can...'
          hints='Find talents, take mock tests and hire them in your company.'
        />
        <Card
          headingText='As a student...'
          hints='Find HR, send CV and take mock tests. Your skills will place you in right company.'
        />
      </div>
    </div>
  );
}
