import { useHistory } from 'react-router';
import HrDataService from '../../Api/services/hr.service';
import { history } from '../store';

import {
  CREATE_HR,
  RETRIEVE_HRS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../types';

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

export const registerHr = (
  hrname,
  cpname,
  email,
  phone,
  cpaddr,
  password,
  major
) => async (dispatch) => {
  // const history = useHistory();
  console.log(hrname);
  try {
    console.log(`this is the data ${hrname}`);

    const res = await HrDataService.create(
      hrname,
      cpname,
      email,
      phone,
      cpaddr,
      password,
      major
    );
    console.log(res);
    console.log(`this is the response ${res.data}`);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    history.push('/signin');
    // dispatch(alertActions.success('Registration successful'));
  } catch (error) {
    console.log(error);
  }
};

export const hrActions = {
  getAllHrs,
  registerHr
};
