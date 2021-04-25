import React from 'react';

export default function ButtonSecondary({ text, onClick }) {
  const handleButtonClick = (event) => {
    onClick && onClick({ event });
  };
  return (
    <div>
      <button onClick={handleButtonClick} className='z-btn secondary'>
        {text}
      </button>
    </div>
  );
}
