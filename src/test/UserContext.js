// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);

  return (
    <UserContext.Provider value={{ name, setName, age, setAge }}>
      {children}
    </UserContext.Provider>
  );
};
