import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// // const Input = () => {
//   const [Counter, setCounter] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const work = (e) => {
//     setCounter(!Counter);
//   };
//   return (
//     <>
//       <div>
//         <input type= "text" onChange={(e)} />
//         <h1 {} >Example</h1>
//       </div>
//     </>
//   );
// };
// export default Input;

// // const Input = ()=>{}
// // const [inputValue, setInputValue] = useState('');
// // const [textColor, setTextColor] = useState('');

// // const handleInputChange = (e) => {
// //   setInputValue(e.target.value);
// //   setTextColor(e.target.value);
// // };

// // return (
// //   <div className="container">
// //     <input
// //       type="text"
// //       className="form-control"
// //       value={inputValue}
// //       onChange={handleInputChange}
// //     />
// //     <h1 className={`display-4 text-${textColor}`}>{inputValue}</h1>
// //   </div>
// // );
// // }

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [textColor, setTextColor] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTextColor(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleInputChange}
      />
      <h1 className={`display-4 text-${textColor}`}>{inputValue}</h1>
    </div>
  );
}

export default Input;
