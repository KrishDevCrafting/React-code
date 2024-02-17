// import react from "react";

// const Info = () => {
//   const [value, setvalue] = react.useState({ Name: "" });
//   const [data, setdata] = react.useState([]);

//   const empty = (e) => {
//     const { N, V } = e.target;
//     setvalue({ ...value, [N]: V });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefalut();
//     setdata([...data, value]);
//     setvalue({ Name: "" });
//   };
//   const handleDelete = (index)=>{
//     const newFormData = [..]
//   }
//   return (
//     <>
//       <div className="container col-5 mx-auto">
//         <form action="" className="form-control">
//           <label>Email address</label>
//           {data}
//           <input
//             className="form-control"
//             type="email"
//             name=""
//             id="Relative"
//             onChange={empty}
//           />
//           <label>Password</label>
//           <input
//             className="form-control"
//             type="password"
//             name=""
//             id="Relative"
//           />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Info;
