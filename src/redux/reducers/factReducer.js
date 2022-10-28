import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function factReducer(state = initialState.fact, action) {
  switch (action.type) {
    case types.FETCH_CAT_FACT_SUCCESS:
      return action.fact;
    default:
      return state;
  }
}
