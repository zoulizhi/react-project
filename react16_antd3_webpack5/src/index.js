import React from "react";
import ReactDOM from "react-dom";
import { store } from './store'
import { Provider } from "./utils/provider"
import MyApp from "component";
ReactDOM.render(
  <Provider value={store}>
    <MyApp />
  </Provider>
  , document.getElementById("root"));
