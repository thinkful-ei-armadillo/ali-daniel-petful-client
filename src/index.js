import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PetProvider } from './petContext'

ReactDOM.render(
  <BrowserRouter>
    <PetProvider>
      <App />
    </PetProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
