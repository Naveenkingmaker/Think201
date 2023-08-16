import axios from 'axios';
import {
    USER_FETCHED_DATA_SUCCESS,
    USER_GET_FAILURE,
} from './Actiontype';

const baseUrl = process.env.REACT_APP_API_URL;

export const listUserSuccess = payload => {
  return {
    type: USER_FETCHED_DATA_SUCCESS,
    payload,
  };
};
export const listUserFailure = payload => {
    return {
      type: USER_GET_FAILURE,
      payload,
    };
  };

export const UserList = () => dispatch => {
  axios({
    method: 'get',
    url: `https://panorbit.in/api/users.json`,
  })
    .then(res => {
   dispatch(listUserSuccess(res.data))
    })
    .catch(err => {
      dispatch(listUserFailure(err.message));
    });
};