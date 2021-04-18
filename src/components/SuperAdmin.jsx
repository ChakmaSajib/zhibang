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
import SuperAdminRightSectionTableContent from './SuperAdminRightSectionTableContent';
import DashboardRightSectionHeader from './DashboardRightSectionHeader';
import Header from './shared/Header';

export default function SuperAdmin() {
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
          <li onClick={showMockMenu}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Mock Interviews
            </Link>
          </li>

          <li onClick={showMockMenu}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Users
            </Link>
          </li>
          <li onClick={showMockMenu}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Interview Questions
            </Link>
          </li>
          <li onClick={showMockMenu}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Support
            </Link>
          </li>
        </div>

        <DashboardRightSection
          headingOne='CV Review'
          headingTwo='CVs History'
        />
      </div>
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

function DashboardRightSection({ headingOne, headingTwo }) {
  return (
    <div className='dashboard-right-section'>
      <RightSectionHeader headingOne={headingOne} />
      <RightSectionFooter headingTwo={headingTwo} />
    </div>
  );
}

function RightSectionFooter({ headingTwo }) {
  return (
    <React.Fragment>
      <h2 style={{ color: '#1BA94C' }}>{headingTwo}</h2>
      <div className='dashboard-right-section-content-box'>
        <SuperAdminRightSectionTableContent />
      </div>
    </React.Fragment>
  );
}

function RightSectionHeader({ headingOne }) {
  return (
    <React.Fragment>
      <h2 style={{ color: '#1BA94C' }}>{headingOne}</h2>
      <div className='dashboard-right-section-content-box'>
        <DashboardRightSectionHeader />
      </div>
    </React.Fragment>
  );
}
