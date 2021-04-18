import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authentication } from './authenticationReducer';
import { registration } from './registerReducer';
import countReducer from './countReducer';
import { alert } from './alertReducer';
import hr from './hr.reducer';

const createCombinedReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    registration,
    alert,
    hr,
    count: countReducer
  });

export default createCombinedReducers;
