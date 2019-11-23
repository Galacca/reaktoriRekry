import React from 'react';
import { Link } from 'react-router-dom';
import parseUrlsFromDepends from '../utils/helperParser';

const DependsView = (dependsValue) => {
  // this.props = parseUrlsFromDepends();
  const dependsArray = Object.values(dependsValue);
  return (
    dependsArray.map((d) => <li>Depends: <Link to={parseUrlsFromDepends(d)}> {d} </Link>, </li>)
  );
  // eslint-disable-next-line react/jsx-one-expression-per-line
  // return <a href={parseUrlsFromDepends(DependsValue)}>{DependsValue}, </a>;
};

export default DependsView;
