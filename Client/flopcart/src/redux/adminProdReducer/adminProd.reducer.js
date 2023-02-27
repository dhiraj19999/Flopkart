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

const initState = {
  getProdState: {
    loading: false,
    error: false,
  },
  addProdState: {
    loading: false,
    error: false,
  },
  updateProdState: {
    loading: false,
    error: false,
  },
  deleteProdState: {
    loading: false,
    error: false,
  },
  allProducts: [],
};

export const adminProdReducers = (state = initState, { type, payload }) => {
  switch (type) {
    // get
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        getProdState: { ...state.getProdState, loading: false },
        allProducts: [...payload],
      };
    }
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        getProdState: { ...state.getProdState, loading: true },
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        getProdState: { ...state.getProdState, error: true },
      };
    }

    // add
    case ADD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        addProdState: { ...state.addProdState, loading: false },
        allProducts: [...state.allProducts, payload],
      };
    }
    case ADD_PRODUCTS_LOADING: {
      return {
        ...state,
        addProdState: { ...state.addProdState, loading: true },
      };
    }
    case ADD_PRODUCTS_ERROR: {
      return {
        ...state,
        addProdState: { ...state.addProdState, error: true },
      };
    }

    // update
    case UPDATE_PRODUCTS_SUCCESS: {
      let updatedData = state.allProducts.map((prod) => {
        if (prod._id === payload.prodID) {
          return { ...prod, ...payload.changes };
        }
        return prod;
      });

      return {
        ...state,
        updateProdState: { ...state.updateProdState, loading: false },
        allProducts: updatedData,
      };
    }
    case UPDATE_PRODUCTS_LOADING: {
      return {
        ...state,
        updateProdState: { ...state.updateProdState, loading: true },
      };
    }
    case UPDATE_PRODUCTS_ERROR: {
      return {
        ...state,
        updateProdState: { ...state.updateProdState, error: true },
      };
    }

    // delete
    case DELETE_PRODUCTS_SUCCESS: {
      let filtereddData = state.allProducts.filter(
        (prod) => prod._id !== payload
      );

      return {
        ...state,
        deleteProdState: { ...state.deleteProdState, loading: false },
        allProducts: filtereddData,
      };
    }
    case DELETE_PRODUCTS_LOADING: {
      return {
        ...state,
        deleteProdState: { ...state.deleteProdState, loading: true },
      };
    }
    case DELETE_PRODUCTS_ERROR: {
      return {
        ...state,
        deleteProdState: { ...state.deleteProdState, error: true },
      };
    }
    default:
      return { ...state };
  }
};
