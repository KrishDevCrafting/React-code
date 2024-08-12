import React from "react";
import { useDispatch } from "react-redux";
import { changeColour } from "../Features/theme";
function ChangeColour() {
  const [color, setColor] = React.useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>ChangeColour</h1>
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />

        <button
          onClick={() => {
            dispatch(changeColour(color));
          }}
        >
          Change Color
        </button>
      </div>
    </>
  );
}

export default ChangeColour;
