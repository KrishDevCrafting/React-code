import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Value from "./Dynamic";

import InputComponent from "./Pears";
// import App from "./Guss";
// import PasswordGenerator from "./PasswordGenerater";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <First />
    <Value />
    <InputComponent />
  </React.StrictMode>
);
