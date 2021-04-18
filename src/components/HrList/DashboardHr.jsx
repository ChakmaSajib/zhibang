import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import onClickOutside from 'react-onclickoutside';

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
import Header from '../shared/Header';

export default function DashboardHr() {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  const [openCvMenu, setCvMenu] = useState(false);
  const [openMockMenu, setMockMenu] = useState(false);
  const [openInterviewMenu, setInterviewMenu] = useState(false);

  const showCheckMenu = () => setCvMenu(!openCvMenu);
  const showMockMenu = () => setMockMenu(!openMockMenu);
  const showInterviewMenu = () => setInterviewMenu(!openInterviewMenu);

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
          {/* <DashboardSideNavbar icon={faFileAlt} content='Check CV' /> */}
          {openCvMenu ? <DashboardDropdownMenu /> : null}
          <li onClick={showMockMenu}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Mock Interviews
            </Link>
          </li>
          {openMockMenu ? <MockDropDownMenu /> : null}
          {/* <DashboardSideNavbar icon={faUserFriends} content='Mock Interviews' /> */}
          <DashboardSideNavbar
            icon={faQuestionCircle}
            content='Interview Questions'
          />
          <DashboardSideNavbar icon={faStarHalfAlt} content='My feedbacks' />
        </div>
        <DashboardRightSection heading='Requested mock interviews' />
      </div>
    </div>
  );
}

function DashboardRightSection({ heading }) {
  return (
    <div className='dashboard-right-section'>
      <h2>{heading}</h2>
      <div className='dashboard-right-section-content-box'>
        <DashboardRightSectionContent
          name='John Doe'
          timeinfo='April 10, 2021'
          deptinfo='CSE, MBA'
          instituteinfo='Sanghai University of Technology'
        />
        <DashboardRightSectionContent
          name='John Doe'
          timeinfo='April 10, 2021'
          deptinfo='CSE, MBA'
          instituteinfo='Sanghai University of Technology'
        />
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

function DashboardRightSectionContent({
  name,
  timeinfo,
  deptinfo,
  instituteinfo
}) {
  return (
    <div className='dashboard-right-section-content '>
      <h3>{name}</h3>
      <p>
        {timeinfo} | {deptinfo} | {instituteinfo}
      </p>
    </div>
  );
}
