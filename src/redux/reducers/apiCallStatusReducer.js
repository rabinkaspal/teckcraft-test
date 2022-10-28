import { toast } from "react-toastify";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function apiCallEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(state = initialState.apiCallInProgress, action) {
  if (action.type === types.BEGIN_API_CALL) {
    return true;
  } else if (action.type === types.API_CALL_ERROR || apiCallEndsInSuccess(action.type)) {
    if (action.type === types.API_CALL_ERROR) {
      toast.error(action.message);
    }
    return false;
  }

  return state;
}
