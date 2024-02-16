import React, { useState } from "react";

const Value = () => {
  const [count, setCounter] = useState(0);
  const Example = () => {
    setCounter(count + 1);
    // try {
    //   (5).toUppercase();
    // } catch (error) {
    //   console.log("oops, you can't do that", error);
    // }
  };
  const Decreament = () => {
    setCounter(count - 1);
  };
  return (
    <>
      <p>count: {count}</p>
      <button className="btn bg-danger" onMouseOver={Example}>
        Submit-here
      </button>
      <button className="btn bg-warning m-4" onMouseOver={Decreament}>
        Decreament
      </button>
    </>
  );
};

export default Value;
