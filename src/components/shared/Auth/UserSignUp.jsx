import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Paper, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import NotificationOverlay from '../../NotificationOverlay';

const useStyles = makeStyles((theme) => ({
  userSignUpContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 4.375rem)'
  },
  signUpForm: {
    width: '25rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textField: {
    marginBottom: '1rem'
  },
  span: {
    color: 'red',
    marginBottom: '1rem'
  },
  signupButton: {
    height: '3rem',
    color: '#413B3B'
  },

  signInButton: {
    color: '#1BA94C',
    marginLeft: '1.2rem'
  },
  pTag: {
    marginTop: '2.5rem'
  }
}));

export default function UserSignUp() {
  const classes = useStyles();
  const history = useHistory();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log('submit button is clicked');

    if (data) {
      alert('sucessful');
      setTimeout(() => history.push('/notify'), 2000);
    }

    // if (data) {
    //     const { personalPhone, officialPhone, email } = data;
    //     dispatch(setPersonalPhone(personalPhone));
    //     dispatch(setOfficialPhone(officialPhone));
    //     dispatch(setEmail(email));
    //     setVaild(true);
    // }
  };
  return (
    <div className='container'>
      <div className={classes.userSignUpContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.signUpForm}>
          <Controller
            name='name'
            control={control}
            defaultValue={false}
            rules={{ required: true, pattern: /^[aA-zZ]*$/ }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className={classes.textField}
                  error={errors.name}
                  variant='outlined'
                  placeholder='Name'
                  id='name'
                  label='Name'
                  type='text'
                />
              );
            }}
          />
          {errors.name && (
            <span role='alert' class={classes.span}>
              Please input valid name
            </span>
          )}
          <Controller
            name='email'
            control={control}
            rules={{
              required: true,
              pattern: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
            }}
            render={({ field }) => (
              <TextField
                className={classes.textField}
                {...field}
                error={errors.email}
                variant='outlined'
                placeholder='Email Address'
                id='email'
                label='Email'
                type='email'
                autoComplete='email'
              />
            )}
          />
          {errors.email && (
            <span role='alert' class={classes.span}>
              Your email address is required
            </span>
          )}
          <Controller
            className={classes.textField}
            name='institute'
            control={control}
            rules={{
              required: true
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.institute}
                className={classes.textField}
                variant='outlined'
                id='institute'
                label='College/University Name'
                type='text'
                autoComplete='institute'
                placeholder='College/University Name'
              />
            )}
          />
          {errors.institute && (
            <span role='alert' class={classes.span}>
              Your institute name is required
            </span>
          )}
          <Controller
            className={classes.textField}
            name='password'
            control={control}
            rules={{
              required: true
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.password}
                className={classes.textField}
                variant='outlined'
                id='password'
                label='Password'
                type='password'
                autoComplete='password'
                placeholder='Password'
              />
            )}
          />
          {errors.password && (
            <span role='alert' class={classes.span}>
              Please input your password
            </span>
          )}

          <Controller
            name='password1'
            control={control}
            rules={{
              required: true
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.password1}
                className={classes.textField}
                variant='outlined'
                id='password1'
                label='Password'
                type='password'
                autoComplete='password1'
                placeholder='Re-type Password'
              />
            )}
          />
          {errors.password1 && (
            <span role='alert' class={classes.span}>
              Please input your password
            </span>
          )}

          <Button
            type='submit'
            variant='contained'
            className={classes.signupButton}
          >
            Create Account
          </Button>
        </form>

        <p className={classes.pTag}>
          Already member?
          <Link to='/signin' className={classes.signInButton}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
