import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary';
import HrProfile from '../../assets/img/hr-profile.jpg';
import ButtonSecondaryBlack from '../Buttons/ButtonSecondaryBlack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatingComponent from 'react-star-rating-component';
import Booking from '../Booking/Booking';
import {
  faEnvelope,
  faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import UploadFiles from '../UploadFiles';
import UploadFile from '../UploadFile';
import axios from 'axios';

export default function SingleHrProfile(props) {
  const authentication = useSelector((state) => state.authentication);

  const [open, setOpen] = useState(false);
  const [openCv, setCv] = useState(false);

  // to Check data is loading and to store the return data to our data variable
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  // to get the id from route
  const { id } = useParams();
  const checkUser = JSON.parse(localStorage.getItem('user'));
  console.log(checkUser);
  console.log(checkUser.data.user.userid);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/hrinfo/id?hrid=${id}`
      );
      setData(response);
      // console.log('this is ' + response);
      // console.log(response.data);
      setIsLoading(false);

      // console.log(data);
      // console.log(data.data.hr.hrname);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(id);
  const handleClickOpen = () => {
    console.log('single ');
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  const openCvDialog = () => {
    setCv(true);
  };
  const closeCvDialog = () => {
    setCv(false);
  };

  return (
    <div className='container'>
      <div className='hr-profile-detail'>
        <div className='hr-profile-header'>
          <div className='hr-profile-header-left'>
            <img src={HrProfile} />
            <div className='hr-profile-text'>
              <h1>{!isLoading && data.data.hr.hrname}</h1>
              <p>{!isLoading && data.data.hr.cpname}</p>
              <StarRatingComponent
                name='rate2'
                editing={false}
                starCount={5}
                value={8}
              />
            </div>
          </div>

          <div className='hr-profile-header-right'>
            <Link to='/messages'>
              <ButtonSecondary text='Send Message' />
            </Link>

            <ButtonSecondary text='Send CV' onClick={openCvDialog} />

            <UploadFile open={openCv} onClose={closeCvDialog} />

            <ButtonSecondaryBlack
              text='Mock Interview '
              onClick={handleClickOpen}
            />

            <Booking open={open} onClose={handleClose} />
          </div>
        </div>
        <div className='hr-profile-body'>
          <div className='hr-profile-body-left'>
            <div className='count'>
              <div className='work'>
                <h3>{!isLoading && data.data.hr.check_cv_count}</h3>
                <span>CV Reviewed</span>
              </div>
              <div className='work'>
                <h3>{!isLoading && data.data.hr.mock_interview_count}</h3>
                <span>Mock Interviews</span>
              </div>
              <div className='work'>
                <h3>{!isLoading && data.data.hr.experience_year}</h3>
                <span>Years of Experience</span>
              </div>
            </div>
            <div className='section'>
              <h3>Contact</h3>
              <p>
                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                {!isLoading && data.data.hr.phone}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                Email: {!isLoading && data.data.hr.email}
              </p>
            </div>

            <div className='section'>
              <h3>Skills</h3>
              <p className='skilltype'>Software Skills</p>
              <SkillName name={'Java'} />
              <SkillName name={'Python'} />
              <SkillName name={'C++'} />
              <SkillName name={'JavaScript'} />

              <p className='skilltype'>Programming Skills</p>
              <SkillName name={'Java'} />
              <SkillName name={'Python'} />
              <SkillName name={'C++'} />
              <SkillName name={'JavaScript'} />
            </div>

            <div className='section'>
              <h3>Languages</h3>
              <p className='languageList'>
                <Language name='Chakma' />
                <Language name='Bangla' />
                <Language name='Chinese' />
              </p>
            </div>
          </div>

          <div className='hr-profile-body-right'>
            <h3>Work Experiences</h3>
            <div className='section'>
              <p className='duration'>2014 to Present</p>
              <p className='department'>Head of Human Resource Department</p>
              <p className='company'>NFLabs</p>
              <p className='location'>Gyeonggi, South Korea, </p>
            </div>

            <div className='section'>
              <p className='duration'>2014 to Present</p>
              <p className='department'>Head of Human Resource Department</p>
              <p className='company'>NFLabs</p>
              <p className='location'>Gyeonggi, South Korea, </p>
            </div>

            <div className='section'>
              <p className='duration'>2014 to Present</p>
              <p className='department'>Head of Human Resource Department</p>
              <p className='company'>NFLabs</p>
              <p className='location'>Gyeonggi, South Korea, </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillName({ name }) {
  return <div className='skillname'>{name}</div>;
}

function Language({ name }) {
  return (
    <React.Fragment>
      <span>{name}, </span>
    </React.Fragment>
  );
}
