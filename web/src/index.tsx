import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./sass/main.sass";
import "./sass/global.sass";
import { store } from "./service/redux/store";
import { Provider } from "react-redux";
console.log(process.env.NODE_ENV);

const el = document.getElementById("root") as Element;
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
