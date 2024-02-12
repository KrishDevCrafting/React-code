import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Form from "./Form";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <First />
    <Form />
  </React.StrictMode>
);
