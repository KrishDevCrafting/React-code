import React from "react";

//This is one of the key features of JSX. Building React elements from HTML code automatically.
//Embedded expressions allow developers to insert the values of JavaScript variables into the HTML of the resulting React elements. Embedded expressions can also embed the outputs of functions.
//Ternary operators and functions in JSX

//A ternary operator in JavaScript uses two distict characters: the first oneis the question mark, that is, the ? character. To the left of the ? character, you put a condition that you'd like to check for.

// const value = () => {
//   let name = "krish";
//   name === "krish" ? console.log("hello,Krish") : console.log("Not krish");

//   return <div>{name}</div>;
// };

function Example() {
  const getRandomNum = () => Math.floor(Math.random(1) * 10) + 1;

  return (
    <div className="heading">
      <h1>Here's a random number from 0 to 10: {getRandomNum()}</h1>
    </div>
  );
}

export default Example;
