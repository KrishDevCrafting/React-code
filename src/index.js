import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Todo from "./Tanay";
import Variable from "./DataEntry";
import Example1 from "./index.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Variable />
    <First />
    <Todo />
    <Example1 />
  </React.StrictMode>
);
