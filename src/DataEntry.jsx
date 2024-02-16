import React, { useState } from "react";

const Info = () => {
  const [Variable, setVariable] = useState();
  const input = (e) => {
    setVariable(e.target.value);
  };
  return (
    <>
      <div className="container">
        <p>{Variable}</p>
        <input type="text" onChange={input} />
      </div>
    </>
  );
};
export default Info;
