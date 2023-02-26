import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "./actionTypes";

// Register Action Creators
export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerError = (error) => {
  return {
    type: REGISTER_ERROR,
    payload: error,
  };
};

export const register = (formdata) => {
  return async (dispatch) => {
    dispatch(registerRequest());

    try {
      const response = await fetch(
        "https://drab-pants-bass.cyclic.app/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      const data = await response.json();
      console.log(data);
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(registerError(error));
    }
  };
};

// Login Action Creators
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await fetch(
        "https://drab-pants-bass.cyclic.app/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};

export const Logout = () => {
  return {
    type: LOGOUT,
  };
};
