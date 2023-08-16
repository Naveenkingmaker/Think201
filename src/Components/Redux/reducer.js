import {
    USER_FETCHED_DATA_SUCCESS, USER_GET_FAILURE
  } from './Actiontype';
  
  const initState = {
    isLoading: false,
    data: [],
  };
  export const UserReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case USER_FETCHED_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload
        };
      case USER_GET_FAILURE:
        return {
          ...state,
          isLoading: false
        };
      default:
        return state;
    }
  };
  