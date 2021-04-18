import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonSecondaryIcon({ text, icon }) {
  return (
    <div>
      <button className='z-btn secondary icon'>
        <FontAwesomeIcon icon={icon} />
        {text}
      </button>
    </div>
  );
}
