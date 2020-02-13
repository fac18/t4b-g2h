/* istanbul ignore file */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Gotham-Bold.otf";
import "./fonts/Gotham-Medium.otf";
import "./fonts/Gotham-Light.otf";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
