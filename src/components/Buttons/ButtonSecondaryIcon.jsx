import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonSecondaryIcon({ text, icon, type }) {
  return (
    <div>
      <button className='z-btn secondary icon' type={type}>
        <FontAwesomeIcon icon={icon} />
        {text}
      </button>
    </div>
  );
}
