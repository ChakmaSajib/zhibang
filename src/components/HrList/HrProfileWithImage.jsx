import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
function HrProfileWithImage({
  image,
  name,
  experience,
  totalCV,
  totalMock,
  stars,
  link,
  id,
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
        <p>
          <StarRatingComponent
            name='rate2'
            editing={false}
            starCount={stars}
            value={8}
          />
        </p>
        <Link to={`/hr/${id}`}>
          <ButtonPrimary text='Choose' />
        </Link>
      </div>
    </div>
  );
}

export default HrProfileWithImage;
