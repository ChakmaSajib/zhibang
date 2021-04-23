import React, { useState } from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary';
import HrProfile from '../../assets/img/hr-profile.jpg';
import ButtonSecondaryBlack from '../Buttons/ButtonSecondaryBlack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatingComponent from 'react-star-rating-component';
import {
  faEnvelope,
  faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function AdminProfileDetail(props) {
  const authentication = useSelector((state) => state.authentication);
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();
  console.log(id);

  function handleClick() {
    console.log('clicked');
    setToggle(true);
  }
  return (
    <div className='container'>
      <div className='hr-profile-detail'>
        <div className='hr-profile-header'>
          <div className='hr-profile-header-left'>
            <img src={HrProfile} />
            <div className='hr-profile-text'>
              <h1>Admin</h1>
              <p>Head of HR, NFLabs</p>
              <StarRatingComponent
                name='rate2'
                editing={false}
                starCount={5}
                value={8}
              />
              <h2>Admin Profile</h2>
            </div>
          </div>
          {/* if user is logined then only he/she could see update profile button */}
          {authentication.loggedIn ? (
            <div className='hr-profile-header-right'>
              <Link to='/updateprofile'>
                <ButtonSecondary text='Update Profile' />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Language({ name }) {
  return (
    <React.Fragment>
      <span>{name}, </span>
    </React.Fragment>
  );
}
