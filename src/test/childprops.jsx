// ChildComponent.jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const ChildComponent = () => {
  const { name, setName, age, setAge } = useContext(UserContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Age: {age}</p>
      <input type="number" value={age} onChange={handleAgeChange} />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, dicta!
    </div>
  );
};

export default ChildComponent;

