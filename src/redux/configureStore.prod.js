import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers";
import catFactSaga from "./sagas";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(catFactSaga);
  return store;
}
