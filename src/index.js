import ReactDOM from "react-dom/client";
import React from "react";
import First from "./First";
import Todo from "./Tanay";
import Example1 from "./index.jsx";
import App from "./App.js";
import TextComponet from "./home/TextAnimation.jsx";

import Info from "./InterSteller.jsx";
import { BrowserRouter } from "react-router-dom";
import { TakeData } from "./Pages/ReviewData.jsx";
import ChildComponent from "./test/childprops.jsx";
import ParentComponent from "./test/parentprops.jsx";



const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(
  <React.StrictMode>
<ParentComponent/>
    <TextComponet/>
<TakeData/>
    <Info/>
  </React.StrictMode>
);
