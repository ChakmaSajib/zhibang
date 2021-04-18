import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Notification({ icon, content }) {
  return (
    <div className='notification'>
      <FontAwesomeIcon icon={icon} />
      <p>{content}</p>
    </div>
  );
}
