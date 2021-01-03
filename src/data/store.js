// Import the store functionality from redux to allow components to subscribe to updates from the application's state
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import initial from "./initial";
import reducer from "./reducer";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(
  reducer,
  initial,
  // necessary middleware for api actions
  composeEnhancers(applyMiddleware(thunk))
);

export default store;