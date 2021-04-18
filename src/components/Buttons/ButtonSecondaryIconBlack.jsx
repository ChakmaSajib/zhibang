import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonSecondaryIconBlack({ text, icon, onClick }) {
  return (
    <div>
      <button className='z-btn secondary icon black' onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
        {text}
      </button>
    </div>
  );
}
