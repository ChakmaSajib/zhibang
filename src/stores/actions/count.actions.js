import { COUNT_CHANGE } from './types';

function changeCount(count) {
  return {
    type: COUNT_CHANGE,
    payload: count
  };
}

export default changeCount;
