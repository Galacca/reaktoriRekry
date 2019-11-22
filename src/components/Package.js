/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Link } from 'react-router-dom';

// I would rather call this Package instead of PackageDetails, but it's a reserved word.

const PackageDetails = ({ packageName }) => (
  <li>
    <Link to={`/packages/${packageName}`}>
      {packageName}
    </Link>
  </li>
);

export default PackageDetails;
