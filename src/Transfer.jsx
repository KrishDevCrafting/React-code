// import React from "react";
// import file from "../file.json";
// const Information = () => {
//   const data = (e) => {
//     console.log(user,"user");
//   };
//   return (
//     <>
//       <div className="container">
//         <ul>
//           <li></li>
//         </ul>
//       </div>
//     </>
//   );
// };
// export default Information;

import React, { useState, useEffect } from "react";

const Information = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return (
    <div className="col-2 mx-auto">
      <h1>Data List</h1>
      <ul className="text-danger">
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Adjust key and data property as per your JSON structure
        ))}
      </ul>
    </div>
  );
};

export default Information;
