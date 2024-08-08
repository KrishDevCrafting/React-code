import React from "react";
import { ChildComponent } from "./ChildC";
export const Parentpage = (props) => {
  return (
    <>
      <div>
        <ChildComponent name="krish" />
        <h1 tyle={{display: "inline-block"}}>Fav Car {props.car}</h1>
      </div>
    </>
  );
};

// props 