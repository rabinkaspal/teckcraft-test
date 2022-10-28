import { takeEvery, call, put } from "redux-saga/effects";
import * as FactAPI from "../features/catFact/factService";
import { fetchCatFactFailure, fetchCatFactSuccess } from "../features/catFact/factSlice";

function* fetchCatFact() {
  try {
    const fact = yield call(FactAPI.getCatFact);
    if (fact) {
      yield put(fetchCatFactSuccess(fact));
    } else {
      yield put(fetchCatFactFailure({ message: "Couldn't fetch fact." }));
    }
  } catch (e) {
    yield put(fetchCatFactFailure({ message: e.message }));
  }
}

function* catSaga() {
  yield takeEvery("catfact/fetchCatFact", fetchCatFact);
}

export default catSaga;
