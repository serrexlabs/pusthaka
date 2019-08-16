import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import configureStore from "./store/configure-store";
import bootstrap from "./bootstrap";

bootstrap();

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root"),
);
