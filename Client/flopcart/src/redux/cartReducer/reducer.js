import * as types from "./actionTypes";

const intialData = {
  carts: [],
  loading: false,
  error: null,
};

export const cartReducer = (state = intialData, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case types.GET_CART_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // cartLength: payload.cartItems.length,
        carts: payload,
      };
    case types.GET_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_TO_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // cartLength: payload.cartItems.length,
      };
    case types.ADD_TO_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.DEL_CART_REQ:
      return {
        ...state,

        isLoading: true,
      };
    case types.DEL_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.DEL_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
