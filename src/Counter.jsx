import React, { useState } from "react";
const Counter = () => {
  const [text, setText] = useState("");
  const handleInput = () => {
    const handleInput = (event) => {
      setText(event.target.value);
    };
    return (
      <>
        <input
          type="text"
          className="form-control"
          onChange={(e) => handleInput(e)}
        />
        <h1 className="text-primary">{text}</h1>
      </>
    );
  };
};

export default Counter;
