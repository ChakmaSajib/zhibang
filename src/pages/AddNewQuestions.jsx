import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

import {
  faEye,
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
import axios from 'axios';

function DashboardRightSection({ heading, text }) {
  const { register, handleSubmit, watch, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.questiontitle);
    console.log(Number(data.addyear));
    axios
      .post('http://localhost:8080/admin/questionSet', {
        set_name: data.questiontitle,
        catalog: data.Position,
        cpname: data.addcompany,
        total_question_num: data.numberofquestions,
        total_score: data.totalscore,
        time: data.time,
        addtime: Number(data.addyear),
        field: 0
      })
      .then(function (respone) {
        console.log(respone);
      });
  };
  const [open, setOpen] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    }
  ]);

  const handleAddClick = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: ''
      }
    ]);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  return (
    <div className='dashboard-right-section'>
      <h2 className='dashboard__heading'>
        {heading}
        <span>{text}</span>
      </h2>
      <div className='dashboard-right-section-content-box'>
        <form className='zhibang__form' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='questiontitle'
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className='da'
                  type='text'
                  placeholder='Add  Question Title'
                  id='questionTitle'
                  variant='outlined'
                  style={{ marginBottom: '4px' }}
                />
              );
            }}
          />

          <div className='oneThird'>
            <Controller
              name='addcompany'
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className='da'
                    type='text'
                    placeholder='Add Company'
                    id='addcompany'
                    variant='outlined'
                    style={{ marginBottom: '4px' }}
                  />
                );
              }}
            />

            <Controller
              name='Position'
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className='Position'
                    type='text'
                    placeholder='Position'
                    id='Position'
                    variant='outlined'
                    style={{ marginBottom: '4px' }}
                  />
                );
              }}
            />

            <Controller
              name='time'
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className='time'
                    type='number'
                    placeholder='Time'
                    id='time'
                    variant='outlined'
                    style={{ marginBottom: '4px' }}
                  />
                );
              }}
            />
            <Controller
              name='addyear'
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className='time'
                    type='number'
                    placeholder='Add Year'
                    id='addyear'
                    variant='outlined'
                    style={{ marginBottom: '4px' }}
                  />
                );
              }}
            />

            <Controller
              name='totalscore'
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className='totalscore'
                    type='text'
                    placeholder='Total Score'
                    id='totalscore'
                    variant='outlined'
                    style={{ marginBottom: '4px' }}
                  />
                );
              }}
            />
            <Controller
              name='numberofquestions'
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className='numberofquestions'
                    type='text'
                    placeholder='Number of Questions'
                    id='numberofquestions'
                    variant='outlined'
                    style={{ marginBottom: '4px' }}
                  />
                );
              }}
            />
          </div>

          {inputFields.map((inputField, index) => (
            <div className='question__with-option' key={index}>
              <Controller
                name={`question${index + 1}`}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      style={{ marginBottom: '4px' }}
                      className={`question+${index + 1}`}
                      type='text'
                      placeholder={`Question ${index + 1}`}
                      id={`question${index + 1}`}
                      variant='outlined'
                      style={{ marginBottom: '4px' }}
                    />
                  );
                }}
              />
              <div className='half' key={index}>
                <Controller
                  name={`question${index + 1}option1`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        className={`question${index + 1}`}
                        type='text'
                        placeholder='Option 1 '
                        id={`question${index + 1} option1`}
                        variant='outlined'
                        style={{ marginBottom: '4px' }}
                      />
                    );
                  }}
                />

                <Controller
                  name={`question${index + 1}option2`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        className={`question+${index + 1}`}
                        type='text'
                        placeholder='Option 2'
                        id={`question${index + 1} option2`}
                        variant='outlined'
                        style={{ marginBottom: '4px' }}
                      />
                    );
                  }}
                />
                <Controller
                  name={`question${index + 1}option3`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        className={`question+${index + 1}`}
                        type='text'
                        placeholder='Option 3'
                        id={`question${index + 1} option3`}
                        variant='outlined'
                      />
                    );
                  }}
                />
                <Controller
                  name={`question${index + 1}option4`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        {...field}
                        className={`question+${index + 1}`}
                        type='text'
                        placeholder='Option 4'
                        id={`question${index + 1} option4`}
                        variant='outlined'
                      />
                    );
                  }}
                />
                <Controller
                  name={`question${index + 1}answer`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        style={{ marginTop: '4px' }}
                        {...field}
                        className={`question+${index + 1}`}
                        type='text'
                        placeholder='Answer'
                        id={`question${index + 1} answer`}
                        variant='outlined'
                      />
                    );
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                {/* <Add
                  icon={faPlusCircle}
                  text='Add Question'
                  onClick={handleAddClick}
                /> */}

                <IconButton onClick={handleAddClick}>
                  <AddCircleOutlineIcon />
                </IconButton>

                {/* <Remove
                  disabled={inputFields.length === 1}
                  onClick={() => handleRemoveFields(inputField.id)}
                  icon={faMinusCircle}
                  text='Remove Question'
                  variant={inputFields.length === 1 ? 'disabled' : null}
                /> */}

                {inputFields.length > 1 && (
                  <IconButton
                    disabled={inputFields.length === 1}
                    onClick={() => handleRemoveFields(inputField.id)}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                )}
              </div>
            </div>
          ))}

          <div className='form-button '>
            <ButtonSecondaryIcon icon={faSave} text='Save' type='submit' />
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
