import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../components/shared/Header';

import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';

export default function MyProfile() {
  return (
    <div>
      <div className='container'>
        <div className='profile-container'>
          <div className='myprofile-left-side'>
            <MyProfileInfoSection heading='Personal Information' />
            <MyProfileInfoSection heading='Connect' />
            <MyProfileInfoSection heading='Skills' />
          </div>
          <div className='myprofile-right-side'>
            <MyProfileInfoSection heading='Work Experience' />
          </div>
        </div>
      </div>
    </div>
  );
}

function MyProfileInfoSection({ heading }) {
  return (
    <div className='profile-info-section'>
      <h3>{heading}</h3>
      <MyProfileInfoContent />
    </div>
  );
}

function MyProfileInfoContent() {
  return (
    <div className='profile-info-section-content'>
      <MyProfileContentTextInput name='Name' />
    </div>
  );
}

function MyProfileContentTextInput({ name, value }) {
  return (
    <div className='text-field'>
      <p>
        {name}: <input type='text' value={value} />
        <span>
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
        <span>
          <FontAwesomeIcon icon={faSave} />
        </span>
      </p>
    </div>
  );
}
