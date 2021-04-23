import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUserFriends,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';

import Header from '../shared/Header';

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
          <h2 style={{ color: '#1BA94C' }}>Admin Dashboard</h2>
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

export default function SuperAdmin() {
  return (
    <div>
      <Header />
      <AdminDashboard />
    </div>
  );
}
