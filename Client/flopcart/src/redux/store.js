import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import { reducer as authReducer } from "./authReducer/reducer";
import { cartReducer } from "./cartReducer/reducer";
import { reducer as dataReducer } from "./dataReducer/reducer";

import { allUsersReducers } from "./usersReducer/users.reducer";
import { adminProdReducers } from "./adminProdReducer/adminProd.reducer";

const rootReducer = combineReducers({
  authReducer,
  dataReducer,
  cartReducer,
  allUsersReducers,
  adminProdReducers,
});

const composer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
