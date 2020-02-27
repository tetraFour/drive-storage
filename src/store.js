import { createStore, compose } from "redux";
import rootReducer from "./reducers/index";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configStore = preloadedState =>
  createStore(rootReducer, preloadedState, composeEnhancers());

const store = configStore({});

export default store;
