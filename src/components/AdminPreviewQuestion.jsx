import React from 'react';
import ButtonSecondaryBlack from './Buttons/ButtonSecondaryBlack';
import ButtonSecondaryIcon from './Buttons/ButtonSecondaryIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSave, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function AdminPreviewQuestion({ heading, text }) {
  return (
    <div className='dashboard-right-section'>
      <h2 className='dashboard__heading'>
        {heading}
        <span>{text}</span>
      </h2>
      <div className='dashboard-right-section-content-box'>
        <h3>React Basic</h3>

        <div className='preview__question_info'>
          <div className='preview__question_info_left'>
            <p>Front-end Developer</p>
            <p>Number of Questions: 40</p>
            <p>Total Score: 40</p>
          </div>
          <div className='preview__question_info_right'>
            <p> Facebook</p>
            <p>2018</p>
            <p>18 minutes</p>
          </div>
        </div>
        <div className='preview__questions'>
          <div className='preview__question'>
            <h4>1. Differentiate between Real DOM and Virtual DOM</h4>
            <ul>
              <li>Option one</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
            </ul>
          </div>

          <div className='preview__question'>
            <h4>2. Differentiate between Real DOM and Virtual DOM</h4>
            <ul>
              <li>Option one</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
            </ul>
          </div>
        </div>
        <div className='preview__buttons'>
          <ButtonSecondaryIcon icon={faSave} text='Save' />
          <ButtonSecondaryBlack icon={faEdit} text='Edit' />
        </div>
      </div>
    </div>
  );
}
