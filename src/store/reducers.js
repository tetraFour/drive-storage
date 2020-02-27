import { combineReducers } from "redux";
import { reducer } from "./reducers/index";

export default combineReducers({
  storage: reducer
});
