import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createCombinedReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    
  });

export default createCombinedReducers;
