import React from 'react';
import { Link } from 'react-router-dom';

const DependsView = (props) => {
  return (
    <li>
Depends:
      {props.dependsValue.map((dv, index) => {
        if (index !== 0 && index + 1 !== props.dependsValue.length && !props.dependsValue[index + 1].startsWith('|')) {
          return dv.trim().concat(', ');
        }
        return dv;
      })}
    </li>
  );
};

export const addPipes = (components) => components.reduce((accumulator, value, index) => {
  if (index < components.length - 1) {
    accumulator.push(value);
    accumulator.push(' | ');
    return accumulator;
  }
  accumulator.push(value);
  return accumulator;
}, []);

export default DependsView;
