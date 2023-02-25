import { loadData } from "../../utils/accessLocalstorage";
import * as types from "./actionTypes";
import axios from "axios";

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
    .get(`https://drab-pants-bass.cyclic.app/cart`, {
      headers: {
        Authorization: loadData("token"),
      },
    })
    .then((re) => {
      return dispatch(getDataSuccess(re.data.data));
    })
    .catch((err) => dispatch(getDataError()));
};
const addData = (p) => (dispatch) => {
  dispatch(addDataReq);
  return axios
    .post(`https://drab-pants-bass.cyclic.app/cart/add`, p, {
      headers: {
        Authorization: loadData("token"),
      },
    })
    .then((re) => dispatch(addDataSuccess()))
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
