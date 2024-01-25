import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Value from "./Dynamic";
import Data from "./Data";
import InputComponent from "./Pears";
// import App from "./Guss";
// import PasswordGenerator from "./PasswordGenerater";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Data name="krish" />
    <Data />
    <Data />
    <First />
    <Value />
    <InputComponent />
  </React.StrictMode>
);
