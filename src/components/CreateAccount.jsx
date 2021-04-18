import React from 'react';
import ButtonPrimary from './Buttons/ButtonPrimary';
import UserHr from '../assets/img/user-hr.svg';
import UserStudent from '../assets/img/user-student.svg';
import OrLine from '../assets/img/or.svg';

const text = 'Find talents and take mock interviews, help them to get hired.';
const textTwo =
  'Take mock interviews from experienced HR and make you fit for jobs';
export default function CreateAccount() {
  return (
    <div className='create-container'>
      <div className='create-account-alert-box'>
        <p className='heading'>Creating account as...</p>
        <div className='account-option'>
          <AccountType image={UserHr} text={text} name='HR' buttonType='HR' />
          <div class='or-mid-line'>
            <img src={OrLine} />
          </div>
          <AccountType
            image={UserStudent}
            text={textTwo}
            name='Student'
            buttonType='Student'
          />
        </div>
      </div>
    </div>
  );
}

function AccountType({ image, text, name, buttonType }) {
  return (
    <div className='user-account'>
      <img src={image} />
      <p>{text}</p>
      <ButtonPrimary text={name} buttonType={buttonType} />
    </div>
  );
}
