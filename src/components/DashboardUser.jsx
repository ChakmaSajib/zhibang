import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

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
import MockInterviewAfterAccept from './HrList/MockInterviewAfterAccept';
import MockInterviewRequested from './HrList/MockInterviewRequested';

function DashboardRightSection({ heading, text }) {
  return (
    <div className='dashboard-right-section'>
      <h2 className='dashboard__heading'>
        {heading}
        <span>{text}</span>
      </h2>
      <div className='dashboard-right-section-content-box'>
        <MockInterviewRequested />
        <MockInterviewAfterAccept />
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
              Mock Interviews
            </Link>
          </li>
          {openMockMenu ? <MockDropDownMenu /> : null}

          <DashboardSideNavbar
            icon={faQuestionCircle}
            content='Interview Questions'
          />
          <DashboardSideNavbar icon={faStarHalfAlt} content='My feedbacks' />
        </div>
        <div className='dashboard-right-section'>
          <h2 style={{ color: '#1BA94C' }}> Welcome to User Dashboard</h2>
        </div>
        {openRightSection && (
          <DashboardRightSection
            heading='Sajib CHakma'
            text='Requested mock interviews'
          />
        )}
      </div>
    </div>
  );
}

export default function DashboardUser() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
