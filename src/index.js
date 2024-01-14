import ReactDOM from "react-dom/client";
// import Itachi from "./Header";
import React from "react";
// import Form from "./Form";
import List from "./List";
import Apples from "./Apple";
import Bag from "./Bag";
import Pears from "./Pears";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Header title="hello" />
    <Header title="Hello-krish you are Great"/> */}
    {/* <Itachi name="Krish" />
    <Itachi color="red" /> */}
    {/* <Form /> */}
    <Bag children={<Pears friend="Peter" />} />

    <Bag>
      <Apples color="yellow" number="5" />
      <Pears friend="Peter" />
    </Bag>

    <Bag children={<Apples color="yellow" number="5" />} />
    <List car="BMW" money="7000" />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
