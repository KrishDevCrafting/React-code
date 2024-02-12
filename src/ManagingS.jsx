import React from "react";
import Fruits from "./Fruit";
import FruitCounter from "./FruitCounter";

const App = () => {
  const [fruit] = React.useState([
    { fruitName: "Apple", id: 1 },
    { fruitName: "Banana", id: 2 },
    { fruitName: "Kiwi", id: 3 },
  ]);
  return (
    <>
      <div className="container bg-black text-white"></div>
      <Fruits fruits={fruit} />
      <FruitCounter fruits={fruit} />
    </>
  );
};

export default App;
