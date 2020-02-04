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

export default DependsView;
