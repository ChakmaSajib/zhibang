import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import HrProfileWithImage from './HrProfileWithImage';
import './_hrinfoinhomepage.scss';

export default function HrInfoInHomePage() {
  return (
    <div className='container'>
      <div className='hrinfoinhomepage'>
        <h5>Friendly HR in Industry</h5>
        <div className='cards-container'>
          <HrProfileWithImage
            name='John Doe'
            company='Dhuduk Inc.'
            experience='12 Years of experience'
            totalCV='47 CV reviewed'
            totalMock='158 Mock Interviews'
            stars='***'
          />

          <HrProfileWithImage
            name='John Doe'
            company='Dhuduk Inc.'
            experience='12 Years of experience'
            totalCV='47 CV reviewed'
            totalMock='158 Mock Interviews'
            stars='***'
          />
          <HrProfileWithImage
            name='John Doe'
            company='Dhuduk Inc.'
            experience='12 Years of experience'
            totalCV='47 CV reviewed'
            totalMock='158 Mock Interviews'
            stars='***'
          />
        </div>
      </div>
    </div>
  );
}

<HrProfileWithImage />;
