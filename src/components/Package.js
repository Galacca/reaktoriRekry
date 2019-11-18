import React from 'react';

// onClick={handleClick}

const PackageComponent = ({ packageName, handleClick }) => (
  <li onClick={handleClick}>
    {packageName}
  </li>
);

// Same here. Reserved word.
export default PackageComponent;
