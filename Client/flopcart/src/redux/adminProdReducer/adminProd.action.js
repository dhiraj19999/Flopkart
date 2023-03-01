import { deleteProd, getProd, patchProd, postProd } from "./adminProd.api";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_LOADING,
  ADD_PRODUCTS_ERROR,
  DELETE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_LOADING,
  DELETE_PRODUCTS_ERROR,
  UPDATE_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS_LOADING,
  UPDATE_PRODUCTS_ERROR,
} from "./adminProd.actionTypes";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let prodsData = await getProd();
    console.log("get:", prodsData);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: prodsData.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const addProduct = (prodDetails) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCTS_LOADING });
  try {
    let res = await postProd(prodDetails);
    console.log("add:", res);
    dispatch({ type: ADD_PRODUCTS_SUCCESS, payload: prodDetails });
  } catch (err) {
    dispatch({ type: ADD_PRODUCTS_ERROR });
  }
};

export const updateProduct = (prodID, changes) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCTS_LOADING });
  try {
    let res = await patchProd(prodID, changes);
    console.log("update:", res);
    dispatch({ type: UPDATE_PRODUCTS_SUCCESS, payload: { prodID, changes } });
  } catch (err) {
    dispatch({ type: UPDATE_PRODUCTS_ERROR });
  }
};

export const deleteProduct = (prodID) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCTS_LOADING });
  try {
    let res = await deleteProd(prodID);
    console.log("update:", res);
    dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: prodID });
  } catch (err) {
    dispatch({ type: DELETE_PRODUCTS_ERROR });
  }
};
