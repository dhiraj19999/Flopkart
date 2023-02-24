import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as dataReducer } from "./dataReducer/reducer";
const rootReducer = combineReducers({ authReducer, dataReducer });

const composer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
