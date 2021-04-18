import { CREATE_HR, RETRIEVE_HRS } from '../types';

const initialState = {
  hrs: [],
  loading: true
};

function HrReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HR:
      return {
        ...state,
        hrs: payload
      };

    case RETRIEVE_HRS:
      return {
        ...state,
        hrs: payload,
        loading: false
      };

    default:
      return state;
  }
}

export default HrReducer;
