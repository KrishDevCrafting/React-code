import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Todo from "./Tanay";
import Example1 from "./index.jsx";
import App from "./App.js";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";}
=======
import Info from "./InterSteller.jsx";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 574e3f0 (admin component added)
const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(
  <React.StrictMode>
<<<<<<< HEAD
    <div><BrowserRouter>
      <App />
      </BrowserRouter>
=======
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Info />
>>>>>>> 574e3f0 (admin component added)
      <First />
      <Todo />
      <Example1 />
    </div>
  </React.StrictMode>
);
