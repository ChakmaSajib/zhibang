import React from 'react';
import './card.scss';
export default function Card({ headingText, hints, image }) {
  return (
    <React.Fragment>
      <div className='card'>
        <img />
        <div className='text'>
          <h6>{headingText}</h6>
          <p>{hints}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
