import {
  ALL_USERS_GET_SUCCESS,
  ALL_USERS_GET_LOADING,
  ALL_USERS_GET_ERROR,
} from "./admin.actionTypes";

const allUsersInitState = {
  loading: false,
  error: false,
  allUsers: {},
};

export const allUsersReducers = (
  state = allUsersInitState,
  { type, payload }
) => {
  switch (type) {
    case ALL_USERS_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        allUsers: { ...payload },
      };
    }
    case ALL_USERS_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ALL_USERS_GET_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return { ...state };
  }
};
