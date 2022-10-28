import { toast } from "react-toastify";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallCountReducer(state = initialState.totalApiCallCount, action) {
  if (action.type === types.FETCH_CAT_FACT_SUCCESS) {
    return state + 1;
  }
  return state;
}
