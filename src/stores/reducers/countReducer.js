import { COUNT_CHANGE } from '../actions/types';

const initialState = {
  count: 0
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case COUNT_CHANGE:
      return {
        ...state,
        count: action.payload
      };

    default:
      return state;
  }
}

export default countReducer;
