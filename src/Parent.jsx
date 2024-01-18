// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const imageUrl = 'path/to/your/image.jpg';

  return <ChildComponent imageSrc={imageUrl} />;
};

export default ParentComponent;
