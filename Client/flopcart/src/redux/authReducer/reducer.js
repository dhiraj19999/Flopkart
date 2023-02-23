import { loadData, saveData } from "../../utils/accessLocalstorage";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  loading: false,
  isLoggedIn: loadData("is_auth") || false,
  error: "",
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      saveData("is_auth", true);
      saveData("user_name", action.payload.data.firstName);
      saveData("token", action.payload.token);
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload.data,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("is_auth");
      localStorage.removeItem("user_name");
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
