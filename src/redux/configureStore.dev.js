import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers";
import catFactSaga from "./sagas";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(catFactSaga);

  return store;
}
