import "core-js/stable";
import "regenerator-runtime";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import store from "./App/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
