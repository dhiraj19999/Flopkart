import { deleteData, loadData, saveData } from "../../utils/accessLocalstorage";
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
      saveData("_id", action.payload.data._id);
      saveData("avatar", action.payload.data.avatar);
      saveData("firstName", action.payload.data.firstName);
      saveData("lastName", action.payload.data.lastName);
      saveData("email", action.payload.data.email);
      saveData("gender", action.payload.data.gender);
      saveData("mobile", action.payload.data.mobile);
      saveData("token", action.payload.token);
     // console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: { ...action.payload.data },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT:
      deleteData("is_auth");
      deleteData("_id");
      deleteData("avatar");
      deleteData("firstName");
      deleteData("lastName");
      deleteData("email");
      deleteData("gender");
      deleteData("mobile");
      deleteData("token");
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
