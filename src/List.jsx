import React from "react";

const list = (props) => {
  return (
    <>
      <nav className="main-nav">
        <ul style={{ listStyle: "a" }}>
          <li>{props.car}</li>
          <li>{props.love}</li>
          <li>{props.money}</li>
          <li>{88 % 88}</li>
        </ul>
      </nav>
    </>
  );
};

export default list;
