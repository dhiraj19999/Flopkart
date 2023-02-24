import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import {reducer as authReducer} from "./authReducer/reducer"
import {cartReducer} from "./cartReducer/reducer"
const rootReducer = combineReducers({authReducer,cartReducer});

const composer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
