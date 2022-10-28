import { combineReducers } from "redux";
import fact from "./factReducer";
import apiCallInProgress from "./apiCallStatusReducer";
import totalApiCallCount from "./apiCallCountReducer";

const rootReducer = combineReducers({
  fact,
  apiCallInProgress,
  totalApiCallCount,
});

export default rootReducer;
