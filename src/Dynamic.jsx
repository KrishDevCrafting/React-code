import React, { useState } from "react";

const Value = () => {
  const [count, setCounter] = useState(0);
  const Example = () => {
    setCounter(count + 1);
  };
  return (
    <>
      <p>count: {count}</p>
      <button className="btn bg-success" onClick={Example}>
        Submit-here
      </button>
    </>
  );
};

export default Value;
