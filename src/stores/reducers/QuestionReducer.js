import {
  RETRIEVE_ALL_SET_OF_QUESTIONS,
  RETRIEVE_ALL_SET_OF_QUESTIONS_WITH_UNIQUE_COMPANY,
  RETRIVE_SPECIFIC_QUESTION_SET
} from '../types';

const initialState = {
  setsOfQuestion: [],
  setsOfQuestionWithCompany: [],
  specificQuestionSet: []
};

function QuestionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_ALL_SET_OF_QUESTIONS:
      return {
        ...state,
        setsOfQuestion: payload
      };
    case RETRIEVE_ALL_SET_OF_QUESTIONS_WITH_UNIQUE_COMPANY:
      return {
        ...state,
        setsOfQuestionWithCompany: payload
      };

    case RETRIVE_SPECIFIC_QUESTION_SET:
      return {
        ...state,
        specificQuestionSet: payload
      };

    default:
      return state;
  }
}

export default QuestionReducer;
