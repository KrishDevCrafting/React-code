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
import { Parentpage } from "./StateLifting/ParentC.jsx";
import user from "./Features/user.js";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import theme from "./Features/theme.js";
const store = configureStore({
  reducer: {
    user: user,
    theme: theme,
  },
});

const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
