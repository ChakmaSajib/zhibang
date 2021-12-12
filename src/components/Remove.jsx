import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Remove({ icon, text, onClick, disabled, variant }) {
  const handleOnClick = (event) => {
    onClick && onClick({ event });
  };
  return (
    <>
      <button
        className={`add ${variant}`}
        onClick={handleOnClick}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={icon} />
        {text}
      </button>
    </>
  );
}
