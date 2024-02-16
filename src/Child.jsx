import React from "react";

const Child = (props) => {
  return (
    <>
      <div className="container">
        <h1 className="text-danger align-content-center">{props.koko}</h1>
      </div>
    </>
  );
};

export default Child;
