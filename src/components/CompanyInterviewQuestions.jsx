import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions
} from '@material-ui/core';
import ButtonSecondary from './Buttons/ButtonSecondary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSetofQuestions,
  getAllSetofQuestionsWithUniqueCompany
} from '../stores/actions/questionActions';

const useStyles = makeStyles((theme) => ({
  questionCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    columnGap: '.625rem',
    rowGap: '.625rem',
    borderTop: '1px solid #1ba94c',
    paddingTop: '1.875rem'
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 15
  },
  pos: {
    marginBottom: 12
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  textWithImage: {
    display: 'inline-block',
    outline: 'none',
    border: 0,
    fontSize: '1rem',
    height: '2rem',
    padding: '0 0.75rem',
    marginBottom: '0.75rem',
    lineHeight: '2rem',
    '&:hover': {
      background: '#1ba94c',
      color: 'white',
      outline: 'none'
    }
  },

  interviewRow: {
    display: 'flex',
    marginBottom: '1.125rem'
  },

  buttonText: {
    display: 'block',
    outline: 'none',
    border: 0,
    fontSize: '1rem',
    height: '2rem',
    padding: '0 0.75rem',
    marginBottom: '0.75rem',
    lineHeight: '2rem',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      background: '#1ba94c',
      color: 'white',
      outline: 'none'
    }
  },
  span: {
    display: 'block',
    padding: '0 1.125rem',
    height: '2rem',
    lineHeight: '2rem',
    backgroundColor: '#738f93',
    color: '#fff',
    width: '5rem',
    marginRight: '0.75rem'
  },
  svg: {
    marginRight: '1rem'
  }
}));

export default function CompanyInterviewQuestions() {
  const dispatch = useDispatch();
  const questionsSets = useSelector((state) => state.questionSets);

  const setsOfQuestionWithCompany = useSelector(
    (state) => state.questionSets.setsOfQuestionWithCompany
  );

  const { setsOfQuestion } = questionsSets;

  useEffect(() => {
    dispatch(getAllSetofQuestionsWithUniqueCompany());
    dispatch(getAllSetofQuestions());
  }, [dispatch]);
  const classes = useStyles();

  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <div className='container'>
      <div className={classes.interviewRow}>
        <div className='left'>
          <span className={classes.span}>Company</span>
        </div>
        <div className='right'>
          {setsOfQuestionWithCompany.hasOwnProperty('cpname') &&
            setsOfQuestionWithCompany.cpname.map((company, index) => (
              <TextWithImage text={company} key={index} />
            ))}
        </div>
      </div>

      <div className={classes.interviewRow}>
        <div className='left'>
          <span className={classes.span}>Position</span>
        </div>
        <div className='right'>
          {setsOfQuestionWithCompany.hasOwnProperty('cpname') &&
            setsOfQuestionWithCompany.catalog.map((position, index) => (
              <TextWithImage text={position} key={index} />
            ))}
        </div>
      </div>

      <div className={classes.interviewRow}>
        <div className='left'>
          <span className={classes.span}>Year</span>
        </div>
        <div className='right'>
          {setsOfQuestionWithCompany.hasOwnProperty('cpname') &&
            setsOfQuestionWithCompany.questionSet.map((question, index) => (
              <TextWithImage text={question.addtime} key={index} />
            ))}
        </div>
      </div>
      <div className={classes.questionCards}>
        {setsOfQuestionWithCompany.hasOwnProperty('cpname') &&
          setsOfQuestionWithCompany.questionSet.map((question, index) => (
            <Cards
              key={index}
              setName={question.set_name}
              company={question.cpname}
              problemSet={question.total_question_num}
              time={question.time === null ? '' : `${question.time}mins`}
              link={index + 1}
            />
          ))}
      </div>
    </div>
  );
}

function TextWithImage({ text, image }) {
  const classes = useStyles();
  return (
    <div className={classes.textWithImage}>
      <button className={classes.buttonText}>
        {image ? <img src={image} alt='image' /> : null}
        <span>{text}</span>
      </button>
    </div>
  );
}

function Cards({ company, problemSet, time, link, setName }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cards} variant='outlined'>
        <CardContent>
          <Typography
            component='h2'
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {setName}
          </Typography>
          <Typography
            component='h2'
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {company}
          </Typography>

          <Typography variant='body2' component='p' color='textSecondary'>
            <FontAwesomeIcon icon={faBook} className={classes.svg} />
            Problem Sets : {problemSet}
          </Typography>
          <Typography>
            <FontAwesomeIcon icon={faClock} className={classes.svg} />
            {time}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Link to={`/exam/${link}`}>
            <ButtonSecondary text='Start' />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
