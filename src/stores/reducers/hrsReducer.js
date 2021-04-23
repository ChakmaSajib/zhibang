import { CREATE_HR, RETRIEVE_HRS, REGISTER_SUCCESS } from '../types';

const initialState = {
  hrs: [],
  loading: true,
  success: false,
  message: ''
};

function HrReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HR:
      return {
        ...state,
        hrs: payload
      };

    case REGISTER_SUCCESS:
      return {
        success: true,
        message: payload.msg
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
