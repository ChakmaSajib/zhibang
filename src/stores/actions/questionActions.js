import questionService from '../../Api/services/questionService';
import {
  RETRIEVE_ALL_SET_OF_QUESTIONS,
  RETRIEVE_ALL_SET_OF_QUESTIONS_WITH_UNIQUE_COMPANY,
  RETRIVE_SPECIFIC_QUESTION_SET
} from '../types';

export const getAllSetofQuestions = () => async (dispatch) => {
  try {
    const res = await questionService.getAllSetofQuestions();
    console.log(res);
    dispatch({
      type: RETRIEVE_ALL_SET_OF_QUESTIONS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllSetofQuestionsWithUniqueCompany = () => async (dispatch) => {
  try {
    const res = await questionService.getAllSetofQuestionsWithUniqueCompany();
    console.log(res);
    dispatch({
      type: RETRIEVE_ALL_SET_OF_QUESTIONS_WITH_UNIQUE_COMPANY,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

//  const RETRIVE_SPECIFIC_QUESTION_SET = 'RETRIVE_SPECIFIC_QUESTION_SET';

export const getSpecificQuestion = (id) => async (dispatch) => {
  try {
    const res = await questionService.getSpecificQuestionSet(id);
    console.log(res);
    dispatch({
      type: RETRIVE_SPECIFIC_QUESTION_SET,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const hrActions = {
  getAllSetofQuestions
};
