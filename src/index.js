import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Todo from "./Tanay";
import Example1 from "./index.jsx";
import App from "./App.js";
import Information from "./Transfer.jsx";
import { BrowserRouter } from "react-router-dom";
const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(
  <React.StrictMode>
    <div>
      <Information />
      <BrowserRouter>
        <App />
      </BrowserRouter>

      <First />
      <Todo />
      <Example1 />
    </div>
  </React.StrictMode>
);
