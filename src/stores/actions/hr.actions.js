import {
  CREATE_HR,
  DELETE_ALL_HRS,
  DELETE_HR,
  RETRIEVE_HRS,
  UPDATE_HR
} from './types';

import HrDataService from '../../Api/services/hr.service';

export const createHR = (
  name,
  company,
  email,
  password,
  phone,
  companyAddress,
  major
) => async (dispatch) => {
  try {
    const response = await HrDataService.create({
      name,
      company,
      email,
      password,
      phone,
      companyAddress,
      major
    });

    dispatch({
      type: CREATE_HR,
      payload: response.data
    });

    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveHRs = () => async (dispatch) => {
  try {
    const res = await HrDataService.getAll();

    dispatch({
      type: RETRIEVE_HRS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const hrActions = {
  createHR,
  retrieveHRs
};
