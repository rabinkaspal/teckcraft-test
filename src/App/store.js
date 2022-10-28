import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import catSaga from "../sagas/catSaga";
import factReducer from "../features/catFact/factSlice";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    factState: factReducer,
  },
  middleware: [saga],
});

saga.run(catSaga);
export default store;
