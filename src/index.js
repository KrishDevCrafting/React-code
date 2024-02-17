import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Todo from "./Tanay";
import Example1 from "./index.jsx";
import App from "./App.js";
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";}
=======
import Info from "./InterSteller.jsx";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 574e3f0 (admin component added)
=======
import Information from "./Transfer.jsx";
import { BrowserRouter } from "react-router-dom";
>>>>>>> refs/remotes/origin/main
const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(
  <React.StrictMode>
<<<<<<< HEAD
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
=======
    <div>
      <Information />
      <BrowserRouter>
        <App />
      </BrowserRouter>

>>>>>>> refs/remotes/origin/main
      <First />
      <Todo />
      <Example1 />
    </div>
  </React.StrictMode>
);
