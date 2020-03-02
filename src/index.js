import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import { Provider } from "react-redux";
import Store from "./store";
import Route from "@/router";

const render = Component => {
  ReactDOM.render(
    <Provider store={Store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

render(Route);

if (module.hot) {
  module.hot.accept("./router/", () => {
    render(Route);
  });
} 
