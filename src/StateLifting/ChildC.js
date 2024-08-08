import React from "react";

export function ChildComponent(props, car) {
  return (
    <>
      <div>
        <h1>My name is {props.name}</h1>
        <h1 style={{display: "inline-block"}}>{(car = "Bmw m4 cs Competiton!")}</h1>
      </div>
    </>
  );
}
