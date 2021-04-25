import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../../stores/actions/usersActions';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { store } from 'react-notifications-component';

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
  loginButton: {
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

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const message = useSelector((state) => state.authentication.message);

  // reset login status
  useEffect(() => {
    dispatch(logout());
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('submit button is clicked');
    const { email, password } = data;
    // alert(JSON.stringify(data));
    const { from } = location.state || { from: { pathname: '/app' } };
    dispatch(login(email, password, from));

    store.addNotification({
      title: 'Login Notification',
      message: message || 'Success',
      type: 'success', // 'default', 'success', 'info', 'warning'
      insert: 'top',
      container: 'bottom-right', // where to position the notifications
      animationIn: ['animated', 'fadeIn'], // animate.css classes that's applied
      animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
      dismiss: {
        duration: 5000
      }
    });
  };
  return (
    <div className='container'>
      <div className={classes.userSignUpContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.signUpForm}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: true
              // pattern: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
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

          <Button
            type='submit'
            variant='contained'
            className={classes.loginButton}
          >
            Login
          </Button>
        </form>

        <p className={classes.pTag}>
          Have not account yet?
          <Link to='/signup' className={classes.signInButton}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
