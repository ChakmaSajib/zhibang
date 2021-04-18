import {
  CREATE_HR,
  DELETE_ALL_HRS,
  DELETE_HR,
  RETRIEVE_HRS,
  UPDATE_HR
} from '../actions/types';

const initialState = [];

function HrReducer(hrInfo = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HR:
      return [...hrInfo, payload];

    case RETRIEVE_HRS:
      return payload;

    default:
      return hrInfo;
  }
}

export default HrReducer;
