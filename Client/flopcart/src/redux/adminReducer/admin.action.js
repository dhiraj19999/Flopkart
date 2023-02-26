import { getUsers } from "./admin.api";
import {
  ALL_USERS_GET_SUCCESS,
  ALL_USERS_GET_LOADING,
  ALL_USERS_GET_ERROR,
} from "./users.actionTypes";

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: ALL_USERS_GET_LOADING });
  try {
    let users = await getUsers();
    console.log(users);
    dispatch({ type: ALL_USERS_GET_SUCCESS, payload: users });
  } catch (err) {
    dispatch({ type: ALL_USERS_GET_ERROR });
  }
};
