import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authentication } from './authenticationReducer';
import { registration } from './registerReducer';
import countReducer from './countReducer';
import { alert } from './alertReducer';
import hrReducer from './hrsReducer';
import userReducer from './usersReducer';

const createCombinedReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    registration,
    alert,
    hrsList: hrReducer,
    count: countReducer,
    usersList: userReducer
  });

export default createCombinedReducers;
