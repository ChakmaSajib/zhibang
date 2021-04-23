import React from 'react';
import Header from '../components/shared/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from '@ramonak/react-progress-bar';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';

import googleSVG from '../assets/img/google.svg';

export default function Exam() {
  return (
    <div>
      <Header />

      <div className='container'>
        <div className='exam__title'>
          <img src={googleSVG} />
          <span className='text__helper'>Have an Trouble?</span>
          <span>Time: 1: 30 mins</span>
        </div>
        <div className='exam__notice'>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>Important Notice</span>
          <ol>
            <li>some text will be here</li>
            <li>some text will be here</li>
          </ol>
        </div>
        <div className='progress__bar'>
          <div className='progress__bar_title'>
            <span>Progress</span>
            <span>Total: 1/3</span>
          </div>
          <ProgressBar completed={60} bgColor='#1ba94c' />
        </div>
        <div className='exam__questions'>
          <div className='question'>
            <h2>1. Question: What is IPV4 ?</h2>
            <div className='question__option'>
              <ol>
                <li>A. Internet Protocol</li>
                <li>B. Optical Fiber Network</li>
              </ol>
            </div>
            <div className='qustion__answer'>
              Answer:
              <input type='text' placeholder='Please input your answer' />
            </div>
          </div>

          <div className='buttons'>
            <ButtonSecondary text='Previous' />
            <ButtonSecondary text='Next' />
          </div>
        </div>
      </div>
    </div>
  );
}
