import React, { useReducer } from "react";

const InitailState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "decrement":
      if (state > 0) {
        return state - 1;
      }
      break;
    case "reset":
      return InitailState;

    default:
      return state;
  }
};

const TestTwo = () => {
  const [count, dispatch] = useReducer(reducer, InitailState);
  return (
    <>
      <h1>{count}</h1>
      <button type="button" onMouseOver={() => dispatch("Increment")}>
        Increment
      </button>
      <button type="button" onMouseOver={() => dispatch("decrement")}>
        Decremnt
      </button>
      <button type="button" onMouseOver={() => dispatch("reset")}>
        Reset
      </button>
    </>
  );
};

export default TestTwo;

// return (
//   <table className="table">
//     <thead>
//       <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Zipcode</th>
//         <th>Company</th>
//         <th>UserName</th>
//       </tr>
//     </thead>
//     <tbody>
//       {App.map((e) => (
//         <tr key={e.id}>
//           <td>{e.id}</td>
//           <td>{e.name}</td>
//           <td>{e.email}</td>
//           <td>{e.address.zipcode}</td>
//           <td>{e.company.name}</td>
//           <td>{e.username}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );
// };
