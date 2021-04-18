import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ButtonPrimary({ text, buttonType }) {
  const history = useHistory();
  const type = buttonType;

  const handleOnClick = () => {
    // // console.log('on click');
    // console.log(type);
    switch (type) {
      case 'Student': {
        history.push('/signup/user');
        break;
      }
      case 'HR': {
        history.push('/signup/hr');
        break;
      }
    }
  };
  return (
    <React.Fragment>
      <button className='z-btn primary' onClick={handleOnClick}>
        {text}
      </button>
    </React.Fragment>
  );
}
