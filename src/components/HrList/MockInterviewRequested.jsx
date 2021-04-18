import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonPrimaryWarning from '../Buttons/ButtonPrimaryWarning';
import ButtonPrimaryDanger from '../Buttons/ButtonPrimaryDanger';

const buttonContent = ['Accept', 'Modify Date', 'Deadline'];

export default function MockInterviewRequested({ heading }) {
  return (
    <div className='right__section'>
      <h2>{heading}</h2>
      <div className='dashboard-right-section-content-box'>
        <MockInterviewRightSectionContent
          name='Rajib'
          instituteLocation='Wuhan,China'
          date='23 nov 2021'
          interViewType='Skype'
        />
      </div>
    </div>
  );
}

function MockInterviewRightSectionContent({
  name,
  degree,
  instituteLocation,
  date,
  interViewType
}) {
  return (
    <div className='mock-interview__rightSectionContent'>
      <div className='mock-interview__rightSectionContent__header'>
        <h3>{name}</h3>
        <p>
          Graduate in <span>{degree}</span>
        </p>
        <p>
          From:
          <span>{instituteLocation}</span>
        </p>
        <p>
          Date: <span className='color'>{date}</span>
        </p>
        <p>
          Interview Method:<span className='color'>{interViewType}</span>
        </p>
      </div>
      <div className='selection-button'>
        <ButtonPrimary text='Accepted' />
        <ButtonPrimaryWarning text='Modify Date' />
        <ButtonPrimaryDanger text='Decline' />
      </div>
      {/* {buttonContent.map((item) => {
       
        return (
          <div className='selection-button'>
            <ButtonPrimary />
            <ButtonPrimaryWarning />
            <ButtonPrimaryDanger />

            <Link to={'/' + item}>{item}</Link>
          </div>
        );
      })} */}
    </div>
  );
}
