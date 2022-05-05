import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./sass/main.sass";
import "./sass/global.sass";

console.log("DEVMODE");
const el = document.getElementById("root") as Element;
const root = createRoot(el);
root.render(<App />);
