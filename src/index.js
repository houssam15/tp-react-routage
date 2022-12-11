import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// décommenter ci-dessous pour activer la version "fonctions/hooks"
import App from "./App";

// décommenter ci-dessous pour activer la version "classes"
// import App from "../src_version_class/App_class";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
