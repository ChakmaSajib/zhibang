import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faEdit,
  faEye,
  faPlusCircle,
  faSave
} from '@fortawesome/free-solid-svg-icons';

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
        <h3>React Basic</h3>

        <div className='preview__question_info'>
          <div className='preview__question_info_left'>
            <p>Front-end Developer</p>
            <p>Number of Questions: 40</p>
            <p>Total Score: 40</p>
          </div>
          <div className='preview__question_info_right'>
            <p> Facebook</p>
            <p>2018</p>
            <p>18 minutes</p>
          </div>
        </div>
        <div className='preview__questions'>
          <div className='preview__question'>
            <h4>1. Differentiate between Real DOM and Virtual DOM</h4>
            <ul>
              <li>Option one</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
            </ul>
          </div>

          <div className='preview__question'>
            <h4>2. Differentiate between Real DOM and Virtual DOM</h4>
            <ul>
              <li>Option one</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
              <li>Option two</li>
            </ul>
          </div>
        </div>
        <div className='preview__buttons'>
          <ButtonSecondaryIcon icon={faSave} text='Save' />

          <ButtonSecondaryIconBlack icon={faEdit} text='Edit' />
        </div>
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

        <DashboardRightSection heading='Preview Question' />
      </div>
    </div>
  );
}

export default function PreviewQuestion() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
