 import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../Features/user";
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
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log-out
      </button>
    </div>
  );
}

export default Login;
