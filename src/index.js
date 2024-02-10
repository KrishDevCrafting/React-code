import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Value from "./Dynamic";
import Data from "./Data";
import TestTwo from "./Reduce";
import InputComponent from "./Pears";
import Pind from "./Nothing";
import Todo from "./Tanay";
// import App from "./Guss";
// import PasswordGenerator from "./PasswordGenerater";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Data />

    <First />
    <Value />
    <InputComponent />
    <TestTwo />
    <Pind />
    <Todo />
  </React.StrictMode>
);
