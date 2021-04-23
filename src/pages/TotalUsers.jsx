import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faAddressBook,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';

import Header from '../components/shared/Header';
import DashboardRightSectionHeader from '../components/DashboardRightSectionHeader';

function AdminDashboard() {
  const [openAddQuestion, setAddQuestion] = useState(false);
  const showAddQuestion = () => setAddQuestion(!openAddQuestion);

  const closeMenu = () => {
    setAddQuestion(false);
    document.removeEventListener('click', closeMenu);
  };

  React.useEffect(() => {
    if (openAddQuestion === true) {
      document.addEventListener('click', closeMenu);
    }
  }, [openAddQuestion]);

  return (
    <div className='container'>
      <div className='dashboard'>
        <div className='dashboard-side-navbar'>
          <li>
            <Link to='/admindashboard/totalusers'>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Total Users
            </Link>
          </li>
          <li onClick={showAddQuestion}>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Interview Questions
            </Link>
          </li>
          {openAddQuestion ? (
            <InterviewQuestionsDropdown link='/admin/addquestions' />
          ) : null}
          <li>
            <Link>
              <span>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
              Support
            </Link>
          </li>
        </div>

        {/* <AdminDashboardRightSection headingOne='Total Users' /> */}
        <div className='dashboard-right-section'>
          {/* <AdminRightSectionHeader headingOne='Total Users' /> */}
          <h2 style={{ color: '#1BA94C' }}>Total Users</h2>
          <div className='dashboard-right-section-content-box'>
            <DashboardRightSectionHeader
              td1={['Type', 'Registered', 'Interviewed', 'CV Reviwed']}
              td2={['Student', 20, 20, 20]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InterviewQuestionsDropdown({ icon, link, content }) {
  return (
    <div className='dashboard-dropdown-menu'>
      <li>
        <Link to={link}>
          <span>
            <FontAwesomeIcon icon={faAddressBook} />
          </span>
          Add Questions
        </Link>
      </li>
    </div>
  );
}

export default function TotalUsers() {
  return (
    <div>
      <Header />
      <AdminDashboard />
    </div>
  );
}
