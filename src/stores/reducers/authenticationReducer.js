import { userConstants } from '../types';

let user = JSON.parse(localStorage.getItem('user'));

// If, user is already exist then, we will make it true otherwise it will be empty

const initialState = user
  ? { loggedIn: true, user }
  : { error: false, message: '' };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.response
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.response
      };
    case userConstants.LOGIN_FAILURE:
      return {
        error: true,
        message: action.response
      };
    case userConstants.LOGOUT:
      return {
        // loggedIn: false
      };
    default:
      return state;
  }
}
