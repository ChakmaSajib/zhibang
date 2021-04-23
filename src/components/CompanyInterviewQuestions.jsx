import React from 'react';
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
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Xiaomi' },
    { key: 1, label: 'Google' },
    { key: 2, label: 'Baidu' },
    { key: 3, label: 'FACEBOOK' },
    { key: 4, label: 'Amazon' }
  ]);

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
          <TextWithImage text='Baidu' />
          <TextWithImage text='Google' />
          <TextWithImage text='Amazon' />
          <TextWithImage text='Apple' />
          <TextWithImage text='Yahoo' />
          <TextWithImage text='Zoom' />
        </div>
      </div>

      <div className={classes.interviewRow}>
        <div className='left'>
          <span className={classes.span}>Position</span>
        </div>
        <div className='right'>
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='Golang Developer' />
          <TextWithImage text='Java Developer' />
          <TextWithImage text='Ruby and Rails Developer' />
          <TextWithImage text='React Native Developer' />
        </div>
      </div>

      <div className={classes.interviewRow}>
        <div className='left'>
          <span className={classes.span}>Year</span>
        </div>
        <div className='right'>
          <TextWithImage text='2017' />
          <TextWithImage text='2019' />
          <TextWithImage text='2021' />
          <TextWithImage text='2016' />
        </div>
      </div>
      <div className={classes.questionCards}>
        <Cards company='Baidu' problemSet='10' time='2.00 Hours' />
        <Cards
          company='Google Interview Question'
          problemSet='10'
          time='2.00 Hours'
        />
        <Cards
          company='Amazon Interview Question'
          problemSet='10'
          time='2.00 Hours'
        />
        <Cards company='Tencent' problemSet='10' time='2.00 Hours' />

        <Cards company='Facebook' problemSet='10' time='2.00 Hours' />
        <Cards company='Bytedance' problemSet='10' time='2.00 Hours' />
        <Cards company='Zoom' problemSet='10' time='2.00 Hours' />
        <Cards company='Tesla ' problemSet='10' time='2.00 Hours' />
        <Cards company='SpaceX' problemSet='10' time='2.00 Hours' />
        <Cards
          company='Wechat Interview Question'
          problemSet='10'
          time='2.00 Hours'
        />
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

function Cards({ company, problemSet, time }) {
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
          <Link to='/exam'>
            <ButtonSecondary text='Start' />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
