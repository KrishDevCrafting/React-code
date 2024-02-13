import React from "react";
const Example1 = () => {
  const [data, setdata] = React.useState(0);
  const count = () => {
    setdata(data + 1);
  };
  return (
    <>
      <div className="container">
        <h1>{data}</h1>
        <button type="button" onClick={count}>
          work
        </button>
      </div>
    </>
  );
};

export default Example1;
