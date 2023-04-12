import { loadData } from "../../utils/accessLocalstorage";
import * as types from "./actionTypes";
import axios from "axios";
import { BsChevronDoubleLeft } from "react-icons/bs";

const getDataReq = () => {
  return {
    type: types.GET_CART_REQ,
  };
};

const getDataSuccess = (pa) => {
  return {
    type: types.GET_CART_SUCCESS,
    payload: pa,
  };
};
const getDataError = () => {
  return {
    type: types.GET_CART_ERROR,
  };
};
const addDataReq = () => {
  return {
    type: types.ADD_TO_CART_REQUEST,
  };
};
const addDataSuccess = () => {
  return {
    type: types.ADD_TO_CART_SUCCESS,
  };
};
const addDataErr = () => {
  return {
    type: types.ADD_TO_CART_FAILURE,
  };
};
const delDataReq = () => {
  return {
    type: types.DEL_CART_REQ,
  };
};
const delDataSuccess = () => {
  return {
    type: types.DEL_CART_SUCCESS,
  };
};
const delDataErr = () => {
  return {
    type: types.DEL_CART_ERROR,
  };
};
const cartLength = () => (dispatch) => {
  dispatch(getDataReq());
  return axios
    .get(`https://flopkart-backend-api.onrender.com/cart`, {
      headers: {
        Authorization: loadData("token"),
      },
    })
    .then((re) => {
      console.log("acttion", re.data);
      return dispatch(getDataSuccess(re.data.data));
    })
    .catch((err) => dispatch(getDataError()));
};
const addData = (p) => (dispatch) => {
  dispatch(addDataReq());
  return axios
    .post(`https://flopkart-backend-api.onrender.com/add`, p, {
      headers: {
        Authorization: loadData("token"),
      },
    })
    .then((re) => {
      console.log(re.data);
      dispatch(addDataSuccess());
    })
    .catch((er) => dispatch(addDataErr()));
};
export {
  getDataError,
  getDataReq,
  getDataSuccess,
  cartLength,
  delDataErr,
  addData,
  delDataReq,
  delDataSuccess,
};
