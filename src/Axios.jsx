import React from "react";
import axios from "axios";
const UseListing=()=>{
    const [data,setdata] = React.useState([])
const userData = async()=>{
await axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
  setdata(res.data)
})
.catch((err)=>{
    console.log(err);
})
}
userData()
//     const useDate = async()=>{
// const response = await fetch ("https://jsonplaceholder.typicode.com/users")
// const users = await response.json();
// console.log(users);
    
   
return(<> 

<h1>Baldwin King..!</h1>
{data.map((e)=>{ return (
    <h1 key={e.user}>{e.name}</h1>)
})
}
</>)
};

export default UseListing;
//npx json-server -- watch.src/db.json --port