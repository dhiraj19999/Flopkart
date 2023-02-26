import {
  ALL_USERS_GET_SUCCESS,
  ALL_USERS_GET_LOADING,
  ALL_USERS_GET_ERROR,
  USER_DELETE_SUCCESS,
  USER_DELETE_LOADING,
  USER_DELETE_ERROR,
} from "./users.actionTypes";

const allUsersInitState = {
  loading: false,
  error: false,
  allUsers: [],
  deleteInitState: {
    loading: false,
    error: false,
  },
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
        allUsers: [...payload],
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
    case USER_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        allUsers: state.allUsers.filter((user) => user._id !== payload),
      };
    }
    case USER_DELETE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_DELETE_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return { ...state };
  }
};
