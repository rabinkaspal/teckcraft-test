import { takeEvery, call, put, all, fork } from "redux-saga/effects";
import * as FactAPI from "../features/catFact/factService";
import { fetchCatFactFailure, fetchCatFactSuccess } from "../features/catFact/factSlice";

const catFactsUrl = "https://catfact.ninja/fact?max_length=130";

function* fetchCatFact(url) {
  try {
    const fact = yield call(FactAPI.getCatFact, url);
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
  yield takeEvery("catfact/fetchCatFact", fetchCatFact, catFactsUrl);
}

export { fetchCatFact };

export default function* catFactSaga() {
  yield all([fork(catSaga)]);
}
