import { takeEvery, call, put } from "redux-saga/effects";
import * as FactAPI from "../../api/factService";
import * as types from "../actions/actionTypes";

function* catFactSaga() {
  yield takeEvery(types.FETCH_CAT_FACT, fetchCatFact);
}

function* fetchCatFact() {
  try {
    yield put({ type: types.BEGIN_API_CALL });
    const fact = yield call(FactAPI.getCatFact);
    if (fact) {
      yield put({ type: types.FETCH_CAT_FACT_SUCCESS, fact });
    } else {
      yield put({ type: types.API_CALL_ERROR, message: "Couldn't fetch fact." });
    }
  } catch (e) {
    yield put({ type: types.API_CALL_ERROR, message: e.message });
  }
}

export default catFactSaga;
