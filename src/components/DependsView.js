import React from 'react';
import { Link } from 'react-router-dom';
import getPackageNames from '../utils/helperParser';

const DependsView = (props) => {
  return (
    // eslint-disable-next-line react/jsx-one-expression-per-line
    <li>Depends: {props.dependsValue.map((d) => <Link to={`/packages/${getPackageNames(d, props.packageNames)}`}> {d} </Link>,)}</li>
  );
};

export default DependsView;
