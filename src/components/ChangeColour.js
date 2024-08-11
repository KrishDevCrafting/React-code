import React from "react";

function ChangeColour() {
  const [color, setColor] = React.useState("");

  return (
    <>
      <div>
        <h1>ChangeColour</h1>
      </div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.returnValue.taget);
        }}
      />
    </>
  );
}

export default ChangeColour;
