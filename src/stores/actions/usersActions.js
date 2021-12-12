import axios from 'axios';
import { history } from '../store';

import { GET_USERS, USERS_ERROR, userConstants, USER_GET_CV } from '../types';
import userService from '../../Api/services/usersService';

export const getCv = (userid) => async (dispatch) => {
  try {
    const response = await userService.getCv(userid);
    dispatch({
      type: USER_GET_CV,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};

export const registerEmployee =
  (username, email, password) => async (dispatch) => {
    console.log(username);
    try {
      console.log(`this is the data ${username}`);

      const res = await userService.registerEmployee(username, email, password);
      console.log(res);
      console.log(`this is the response ${res.data}`);

      dispatch({
        type: userConstants.REGISTER_SUCCESS,
        payload: res.data
      });
      history.push('/signin');
      // dispatch(alertActions.success('Registration successful'));
    } catch (error) {
      console.log(error);
    }
  };

export const login = (username, password, from) => {
  return async (dispatch) => {
    dispatch(request({ username }));

    try {
      const response = await userService.login(username, password);

      // console.log('this is the ' + response);
      // console.log(response.data.msg);
      switch (response.data.msg) {
        case 'Incorrect email':
          console.log('inside from email');
          dispatch(failure(response.data.msg));
          break;

        case 'Incorrect email or password':
          console.log('inside from password');
          dispatch(failure(response.data.msg));
          break;

        default:
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(response));
          dispatch(success(response));

          {
            /** Based on user is route will be also changed */
          }
          {
            response.data.hasOwnProperty('user') &&
              history.push('/userprofile');
          }
          {
            response.data.hasOwnProperty('hr') && history.push('/hrprofile');
          }
          {
            response.data.hasOwnProperty('admin') &&
              history.push('/admindashboard');
          }

          break;
      }
      // history.push(from);
    } catch (error) {
      console.log(error);
      // dispatch(failure(error.toString()));
      // dispatch(alertActions.error(error.toString()));
    }
  };
  function request(response) {
    return { type: userConstants.LOGIN_REQUEST, response };
  }
  function success(response) {
    return { type: userConstants.LOGIN_SUCCESS, response };
  }
  function failure(response) {
    return { type: userConstants.LOGIN_FAILURE, response };
  }
};

export const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout,
  registerEmployee,
  getCv
};
