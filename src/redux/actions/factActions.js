import * as types from "./actionTypes";

export function fetchFactSuccess(fact) {
  return { type: types.FETCH_CAT_FACT_SUCCESS, fact };
}

export function fetchCatFact() {
  return { type: types.FETCH_CAT_FACT };
}
