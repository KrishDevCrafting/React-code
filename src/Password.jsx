import React, { useState } from "react";

const Password = () => {
  const [Counter, setCounter] = useState(false);
  // const [hide, setHide] = useState(true);

  const Example = () => {
    setCounter(!Counter);
  };
  const off = () => {
    setCounter(!Counter);
  };

  return (
    <>
      <div className="container">
        <p>
          <input type={Counter ? "text" : "password"} />
        </p>

        <button className="btn bg-danger row-6" onClick={Example}>
          Toggle
        </button>
        <button className="btn bg-primary m-4" onClick={off}>
          Toggle off
        </button>
      </div>
    </>
  );
};

export default Password;
