import * as types from "./actionTypes";
import axios from "axios";
const getDataReq = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

const getDataSuccess = (pa) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload: pa,
  };
};
const getDataError = () => {
  return {
    type: types.GET_DATA_ERROR,
  };
};
const getData = (query, p) => (dispatch) => {
  dispatch(getDataReq());
  return axios
    .get(`https://drab-pants-bass.cyclic.app/products?q=${query}`, p)
    .then((re) => dispatch(getDataSuccess(re.data)))
    .catch((err) => dispatch(getDataError(err)));
};
export { getData, getDataError, getDataReq, getDataSuccess };
