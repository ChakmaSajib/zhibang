import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary';
import company1 from '../../assets/img/company1.png';
import company2 from '../../assets/img/company2.png';
import company3 from '../../assets/img/company3.png';
import company4 from '../../assets/img/company4.png';
import didi from '../../assets/img/didi.png';
import iqiyi from '../../assets/img/iqiyi.png';

export default function ZhibangHome() {
  return (
    <div className='container'>
      <div className='zhibang__home'>
        <div className='left'>
          <h1>Take A Giant Leap In The Hiring Process.</h1>
          <p>
            Review CVs of talents, take mock tests and hire for your company.
            Take skill exams and get recommended.
          </p>

          <div className='buttons'>
            <Link to='/hr'>
              <ButtonPrimary text='Find HR' />
            </Link>
            <ButtonSecondary text='Find Talents' />
          </div>

          <div className='zhibang__partners'>
            <img src={company1} />
            <img src={company2} />
            <img src={didi} />
            <img src={iqiyi} />
          </div>
        </div>

        <div className='right'>
          <img src={company3} />
          <img src={company4} className='bottom__image' />
        </div>
      </div>
    </div>
  );
}
