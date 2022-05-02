import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./sass/main.sass";
import "./sass/global.sass";

console.log("DEVMODE");
ReactDOM.render(<App />, document.getElementById("root"));
