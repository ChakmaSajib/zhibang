import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Paper, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { hrActions } from '../../.././stores/actions';

import { useDispatch, useSelector } from 'react-redux';

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

export default function HrSignUp() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  console.log(dispatch);
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log('submit button is clicked');
    alert(JSON.stringify(data));
    dispatch(hrActions.createHR(data));
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
            name='department'
            control={control}
            rules={{
              required: true,
              pattern: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
            }}
            render={({ field }) => (
              <TextField
                className={classes.textField}
                {...field}
                error={errors.department}
                variant='outlined'
                placeholder='Department'
                id='department'
                label='Department'
                type='department'
                autoComplete='department'
              />
            )}
          />
          {errors.department && (
            <span role='alert' class={classes.span}>
              Your department name is required
            </span>
          )}
          <Controller
            className={classes.textField}
            name='company'
            control={control}
            rules={{
              required: true
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.company}
                className={classes.textField}
                variant='outlined'
                id='company'
                label='Company'
                type='text'
                autoComplete='company'
                placeholder='Company'
              />
            )}
          />
          {errors.company && (
            <span role='alert' class={classes.span}>
              Your company name is required
            </span>
          )}

          <Controller
            className={classes.textField}
            name='companyAddress'
            control={control}
            rules={{
              required: true
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.companyAddress}
                className={classes.textField}
                variant='outlined'
                id='companyAddress'
                label='Company Address'
                type='text'
                autoComplete='company'
                placeholder='Company Address'
              />
            )}
          />
          {errors.companyAddress && (
            <span role='alert' class={classes.span}>
              Your company address is required
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
