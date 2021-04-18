import { CREATE_HR, RETRIEVE_HRS } from '../types';

import HrDataService from '../../Api/services/hr.service';

// export const createHR = (
//   name,
//   company,
//   email,
//   password,
//   phone,
//   companyAddress,
//   major
// ) => async (dispatch) => {
//   try {
//     const response = await HrDataService.create({
//       name,
//       company,
//       email,
//       password,
//       phone,
//       companyAddress,
//       major
//     });

//     dispatch({
//       type: CREATE_HR,
//       payload: response.data
//     });

//     return Promise.resolve(response.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

export const getAllHrs = () => async (dispatch) => {
  try {
    const res = await HrDataService.getAll();
    console.log(res);
    dispatch({
      type: RETRIEVE_HRS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const hrActions = {
  getAllHrs
};
