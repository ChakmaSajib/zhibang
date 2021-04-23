import React from 'react';

export default function ButtonSecondaryBlack({ text, onClick }) {
  const handleButtonClick = (event) => {
    onClick && onClick({ event });
  };
  return (
    <div>
      <button onClick={handleButtonClick} className='z-btn secondary black'>
        {text}
      </button>
    </div>
  );
}
