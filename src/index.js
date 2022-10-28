import "core-js/stable";
import "regenerator-runtime";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={configureStore()}>
    <App />
  </ReduxProvider>
);
