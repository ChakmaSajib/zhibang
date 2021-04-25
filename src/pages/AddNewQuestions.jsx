import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {
  faEye,
  faPlusCircle,
  faSave,
  faUserFriends,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';
import InputType from '../components/InputType';
import Add from '../components/Add';
import ButtonSecondaryIcon from '../components/Buttons/ButtonSecondaryIcon';
import ButtonSecondaryIconBlack from '../components/Buttons/ButtonSecondaryIconBlack';
import DashboardRightSectionHeader from '../components/DashboardRightSectionHeader';
import Header from '../components/shared/Header';

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
            <Link to='/preview'>
              <ButtonSecondaryIconBlack icon={faEye} text='Preview' />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

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
            <InterviewQuestionsDropdown
              content='Add Questions'
              link='/admin/addquestions'
            />
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
        <DashboardRightSection heading='Add New Interview Questions' />
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

export default function AddNewQuestion() {
  return (
    <div>
      <Header />
      <AdminDashboard />
    </div>
  );
}
