import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonPrimaryWarning from '../Buttons/ButtonPrimaryWarning';
import ButtonSecondary from '../Buttons/ButtonSecondary';

const buttonContent = ['confirm', 'back'];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    },
    checkboxesContainer: {}
  })
);

export default function MockInterviewAfterAccept({
  heading,
  name,
  degree,
  instituteLocation,
  date,
  interViewType
}) {
  return (
    <div className='right-section'>
      <h2>{heading}</h2>
      <div className='dashboard-right-section-content-box'>
        <MockInterviewRightSectionContent heading='Almost done, one more step...' />
      </div>
    </div>
  );
}

function MockInterviewRightSectionContent({ heading }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    question: true,
    videocall: false
  });

  const { question, videocall } = state;

  const handleChange = (event) => {
    console.log([event.target.checked]);
    console.log([event.target.name]);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleButton = (item) => {
    console.log(item);
  };
  return (
    <div className='mock-interview__rightSectionContent'>
      <div className='mock-interview__rightSectionContent__header'>
        <h3>{heading}</h3>
        <div className={classes.checkboxesContainer}>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>Select Interview Type</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={question}
                    onChange={handleChange}
                    name='question'
                  />
                }
                label='Question Base'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={videocall}
                    onChange={handleChange}
                    name='videocall'
                  />
                }
                label='Video call'
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
      <div className='selection-button'>
        <ButtonSecondary text='Confirm' />
        <ButtonPrimaryWarning text='Back' />
      </div>

      {/* {buttonContent.map((item) => {
        return (
          <div className='selection-button'>
            <button onClick={handleButton(item)}>
              <Link to={'/' + item}>{item}</Link>
            </button>
          </div>
        );
      })} */}
    </div>
  );
}
