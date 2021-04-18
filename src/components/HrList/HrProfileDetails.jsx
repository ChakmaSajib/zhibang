import React, { useState } from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary';
import HrProfile from '../../assets/img/hr-profile.jpg';
import ButtonSecondaryBlack from '../Buttons/ButtonSecondaryBlack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

export default function HrProfileDetails(props) {
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
              <h1>Zihui Park</h1>
              <p>Head of HR, NFLabs</p>
              <h4>***</h4>
            </div>
          </div>
          <div className='hr-profile-header-right'>
            <ButtonSecondary text='Send Message' />
            <ButtonSecondary text='Send CV' />
            <ButtonSecondaryBlack
              text='Mock Interview'
              onClick={() => console.log('You clicked on the pink circle!')}
            />
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
                <span>Mock Interviews</span>
              </div>
              <div className='work'>
                <h3>23+</h3>
                <span>Years of Experience</span>
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
