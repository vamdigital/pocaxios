import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from './Reducers'

const middlewares = [thunk];

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;