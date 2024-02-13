import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
<<<<<<< HEAD
import Todo from "./Tanay";
import Variable from "./DataEntry";
import Example1 from "./index.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Variable />
=======
import App from "./ManagingS";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
>>>>>>> 77b6df176e8187d3d381ab800dbca99a6537e7c9
    <First />
    <Todo />
    <Example1 />
  </React.StrictMode>
);
