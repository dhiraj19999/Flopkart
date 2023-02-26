import { deleteUser, getUsers } from "./allusers.api";
import {
  ALL_USERS_GET_SUCCESS,
  ALL_USERS_GET_LOADING,
  ALL_USERS_GET_ERROR,
  USER_DELETE_SUCCESS,
  USER_DELETE_LOADING,
  USER_DELETE_ERROR,
} from "./users.actionTypes";

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: ALL_USERS_GET_LOADING });
  try {
    let users = await getUsers();
    console.log(users);
    dispatch({ type: ALL_USERS_GET_SUCCESS, payload: users.data });
  } catch (err) {
    dispatch({ type: ALL_USERS_GET_ERROR });
  }
};

export const deleteAnUser = (id) => async (dispatch) => {
  dispatch({ type: USER_DELETE_LOADING });
  try {
    let res = await deleteUser(id);
    console.log(res);
    dispatch({ type: USER_DELETE_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: USER_DELETE_ERROR });
  }
};
