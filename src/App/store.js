import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import catSaga from "../sagas/catSaga";
import factReducer from "../features/catFact/factSlice";

const saga = createSagaMiddleware();

export const setupStore = preloadedState => {
  return configureStore({
    reducer: {
      factState: factReducer,
    },
    preloadedState,
    middleware: [saga],
  });
};

const store = setupStore();

saga.run(catSaga);

export default store;
