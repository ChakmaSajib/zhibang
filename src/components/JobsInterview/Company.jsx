import React from 'react';
import companyImage from '../../assets/img/hr-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTools,
  faTimes,
  faStopwatch
} from '@fortawesome/free-solid-svg-icons';

export default function JobInterview() {
  return (
    <div className='job-interview-container'>
      <div className='company'>
        <CompanyName image={companyImage} name='Google' />
        <CompanyName image={companyImage} name='Baidu' />
        <CompanyName image={companyImage} name='Dhuduk' />
        <CompanyName image={companyImage} name='Shopee' />
      </div>
      <div className='job-position'>
        <div className='icon-title'>
          <FontAwesomeIcon icon={faTools} />
        </div>
        <JobPositonTitle title='Golang Developer' />
        <JobPositonTitle title='Python Developer' />
        <JobPositonTitle title='C++ Developer' />
        <JobPositonTitle title='Marketing Manager' />
        <JobPositonTitle title='JavaScript Developer' />
      </div>

      <div className='job-question-year'>
        <div className='icon-title'>
          <FontAwesomeIcon icon={faStopwatch} />
        </div>
        <JobQuestionsTime time={2021} />
        <JobQuestionsTime time={2019} />
        <JobQuestionsTime time={2020} />
        <JobQuestionsTime time={2017} />
        <JobQuestionsTime time={2018} />
      </div>
    </div>
  );
}

function CompanyName({ image, name }) {
  return (
    <div className='company-name'>
      <img src={image} alt={image} />
      <h3>{name}</h3>
    </div>
  );
}

function JobPositonTitle({ title }) {
  return (
    <div className='job-position-title'>
      {/* <ButtonPrimary text={title} /> */}
      <a href={title}>{title}</a>
    </div>
  );
}

function JobQuestionsTime({ time }) {
  return (
    <div className='job-questions-time'>
      <a href={time}>{time}</a>
    </div>
  );
}
