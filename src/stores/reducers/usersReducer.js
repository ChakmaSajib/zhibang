import { GET_USERS, USER_GET_CV } from '../types';

const initialState = {
  users: [],
  loading: true,
  userCVfile: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case USER_GET_CV:
      return {
        ...state,
        userCVfile: action.payload
      };
    default:
      return state;
  }
}
