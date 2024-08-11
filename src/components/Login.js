import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/user";
function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Krish",
              age: "20",
              email: "krishkiyotaka@gamil.com",
            })
          );
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
