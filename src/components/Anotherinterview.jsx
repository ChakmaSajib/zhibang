import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions
} from '@material-ui/core';

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
    fontSize: 14
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
  }
}));

export default function AnotherInterview() {
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
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
        </div>
      </div>

      <div className={classes.interviewRow}>
        <div className='left'>
          <span className={classes.span}>Position</span>
        </div>
        <div className='right'>
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
          <TextWithImage text='PHP Developer' />
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
        <Cards />
        <Cards />
        <Cards />
        <Cards />

        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
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

function Cards() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cards} variant='outlined'>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            Word of the Day
          </Typography>

          <Typography className={classes.pos} color='textSecondary'>
            adjective
          </Typography>
          <Typography variant='body2' component='p'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
