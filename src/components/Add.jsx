import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Add({ icon, text }) {
  return (
    <>
      <button className='add'>
        <FontAwesomeIcon icon={icon} />
        {text}
      </button>
    </>
  );
}
