import React from 'react';
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import HrProfile from '../assets/img/hr-profile.jpg';
import ButtonSecondaryBlack from '../components/Buttons/ButtonSecondaryBlack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

export default function UserProfileDetail(props) {
  const { id } = useParams();
  console.log(id);
  return (
    <div className='container'>
      <div className='hr-profile-detail'>
        <div className='hr-profile-header'>
          <div className='hr-profile-header-left'>
            <img src={HrProfile} />
            <div className='hr-profile-text'>
              <h1>Zihui Park</h1>
              <p>Head of HR, NFLabs</p>
              <h4>***</h4>
            </div>
          </div>
          <div className='hr-profile-header-right'>
            {/* if user is logined then only he/she could see update profile */}
            <Link to='/updateprofile'>
              <ButtonSecondary text='Update Profile' />
            </Link>
          </div>
        </div>
        <div className='hr-profile-body'>
          <div className='hr-profile-body-left'>
            <div className='count'>
              <div className='work'>
                <h3>23</h3>
                <span>CV Reviewed</span>
              </div>
              <div className='work'>
                <h3>23</h3>
                <span>Mock Interviews Completed</span>
              </div>
              <div className='work'>
                <h3>21</h3>
                <span>Exam Completed</span>
              </div>
            </div>
            <div className='section'>
              <h3>Contact</h3>
              <p>
                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                Phone: +096023768
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                Email: chakma@gmail.com
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
