import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEye, faPlusCircle, faSave } from '@fortawesome/free-solid-svg-icons';

import {
  faFileAlt,
  faUserFriends,
  faQuestionCircle,
  faStarHalfAlt,
  faFileExport,
  faCheckCircle,
  faTimesCircle,
  faSwimmer
} from '@fortawesome/free-solid-svg-icons';
import InputType from '../components/InputType';
import Add from '../components/Add';
import ButtonSecondaryIcon from '../components/Buttons/ButtonSecondaryIcon';
import ButtonSecondaryIconBlack from '../components/Buttons/ButtonSecondaryIconBlack';

function DashboardRightSection({ heading, text }) {
  return (
    <div className='dashboard-right-section'>
      <h2 className='dashboard__heading'>
        {heading}
        <span>{text}</span>
      </h2>
      <div className='dashboard-right-section-content-box'>
        <form className='zhibang__form'>
          <InputType
            type='text'
            placeholder='Add  Question Title'
            id='fullname'
          />

          <div className='oneThird'>
            <InputType type='text' placeholder='Add Company' id='fullname' />
            <InputType type='text' placeholder='Position' id='fullname' />
            <InputType type='text' placeholder='Time' id='fullname' />
            <InputType type='text' placeholder='Total Score ' id='fullname' />
            <InputType type='text' placeholder='Year ' id='fullname' />
            <InputType
              type='text'
              placeholder='Number of Questions '
              id='fullname'
            />
          </div>
          <Add icon={faPlusCircle} text='Add Question' />

          <div className='question__with-option'>
            <InputType type='text' placeholder='Question' id='fullname' />

            <div className='half'>
              <InputType type='text' placeholder='Option 1' id='fullname' />
              <InputType type='text' placeholder='Option 2' id='fullname' />
              <InputType type='text' placeholder='Option 3' id='fullname' />
              <InputType type='text' placeholder='Option 4 ' id='fullname' />
            </div>
          </div>
          <div className='form-button '>
            <ButtonSecondaryIcon icon={faSave} text='Save' />

            <ButtonSecondaryIconBlack icon={faEye} text='Preview' />
          </div>
        </form>
      </div>
    </div>
  );
}

function DashboardDropdownMenu({ icon, link, content }) {
  return (
    <div className='dashboard-dropdown-menu'>
      <DashboardSideNavbar icon={faFileExport} content='Requested' />
      <DashboardSideNavbar icon={faSwimmer} content='Accepted' />
      <DashboardSideNavbar icon={faCheckCircle} content='Completed' />
      <DashboardSideNavbar icon={faTimesCircle} content='Rejected' />
    </div>
  );
}

function MockDropDownMenu({ icon, link, content }) {
  return (
    <div className='dashboard-dropdown-menu'>
      <DashboardSideNavbar icon={faFileExport} content='Requested' />
      <DashboardSideNavbar icon={faSwimmer} content='Accepted' />
      <DashboardSideNavbar icon={faCheckCircle} content='Completed' />
      <DashboardSideNavbar icon={faTimesCircle} content='Rejected' />
    </div>
  );
}

function DashboardSideNavbar({ icon, content, link }) {
  return (
    <React.Fragment>
      <li>
        <Link to={link}>
          <span>
            <FontAwesomeIcon icon={icon} />
          </span>

          {content}
        </Link>
      </li>
    </React.Fragment>
  );
}

function Dashboard() {
  const [openCvMenu, setCvMenu] = useState(false);
  const [openMockMenu, setMockMenu] = useState(false);
  const [openInterviewMenu, setInterviewMenu] = useState(false);
  const [openRightSection, setRightSection] = useState(false);

  const showCheckMenu = () => setCvMenu(!openCvMenu);
  const showMockMenu = () => setMockMenu(!openMockMenu);
  const showInterviewMenu = () => setInterviewMenu(!openInterviewMenu);
  const handleRequestedClick = () => setRightSection(!openRightSection);

  const closeMenu = () => {
    setCvMenu(false);
    document.removeEventListener('click', closeMenu);
  };

  React.useEffect(() => {
    if (openCvMenu === true) {
      document.addEventListener('click', closeMenu);
      setMockMenu(false);
      setInterviewMenu(false);
    }
  }, [openCvMenu, openMockMenu, openInterviewMenu]);

  return (
    <div className='container'>
      <div className='dashboard'>
        <div className='dashboard-side-navbar'>
          <li onClick={showCheckMenu}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
              Check CV
            </Link>
          </li>

          {/* {openCvMenu ? <DashboardDropdownMenu /> : null} */}
          {openCvMenu ? (
            <div className='dashboard-dropdown-menu'>
              <li onClick={handleRequestedClick}>
                <Link>
                  <span>
                    <FontAwesomeIcon icon={faFileExport} />
                  </span>
                  Requested
                </Link>
              </li>
            </div>
          ) : null}

          <li onClick={showMockMenu}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Add Question
            </Link>
          </li>
          {openMockMenu ? <MockDropDownMenu /> : null}

          <DashboardSideNavbar
            icon={faQuestionCircle}
            content='Interview Questions'
          />
          <DashboardSideNavbar icon={faStarHalfAlt} content='My feedbacks' />
        </div>

        <DashboardRightSection heading='Add new interview question' />
      </div>
    </div>
  );
}

export default function AddNewQuestion() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
