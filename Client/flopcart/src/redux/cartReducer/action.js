import { loadData } from "../../utils/accessLocalstorage";
import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE,
  } from "./actionTypes";

import axios from "axios"

  export const getData =async()=>{
    try {
     const res = await fetch(`https://drab-pants-bass.cyclic.app/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': loadData("token")
      },}
      
      
      )
     const data = await res.json()
     console.log(data.data);
     return data.data

    } catch (error) {
      console.log("error");
    }
  }

  //delete request 

  export const removeItemFromCart = (itemId )=> async dispatch => {
    try {
      await axios.delete(`https://drab-pants-bass.cyclic.app/cart/delete/${itemId}`, {
        headers: {
          "Authorization": loadData("token")
        }
      });
  
      dispatch({
        type: REMOVE_FROM_CART_SUCCESS,
        payload: itemId
      });
    } catch (error) {
      dispatch({
        type: REMOVE_FROM_CART_FAILURE,
        payload: error.message
        
      });
    }
  };
  
  
  
  
 

