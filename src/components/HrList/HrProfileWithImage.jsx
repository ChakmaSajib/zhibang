import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import { Link } from 'react-router-dom';
function HrProfileWithImage({
  image,
  name,
  experience,
  totalCV,
  totalMock,
  stars,
  link,
  company
}) {
  return (
    <div className='hrProfileWithImage_Card'>
      <img src={image} />
      <div className='HrProfileWithImage_content'>
        <h1>{name}</h1>
        <span>{company}</span>
        <p>{experience}</p>
        <p>{totalCV}</p>
        <p>{totalMock}</p>
        <p>{stars}</p>

        <Link to='/hr/name'>
          <ButtonPrimary text='Choose' />
        </Link>
      </div>
    </div>
  );
}

export default HrProfileWithImage;
