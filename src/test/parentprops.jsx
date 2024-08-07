// ParentComponent.jsx
import React from 'react';
import { UserProvider } from './UserContext';
import ChildComponent from './childprops';

const ParentComponent = () => {
  return (
    <UserProvider>
      <ChildComponent />
    </UserProvider>
  );
};

export default ParentComponent;

