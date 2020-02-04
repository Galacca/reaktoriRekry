import React from 'react';
import { Link } from 'react-router-dom';
import isLinkable from '../utils/linker';
import formatPackageNames from '../utils/helpers';

const DependsView = (props) => {
  return (
    <li>
Depends:
      {props.dependsValue.map((dv, index) => {
        const linkable = isLinkable(formatPackageNames(dv), props.packages);
        if (index !== 0 && index + 1 !== props.dependsValue.length && !props.dependsValue[index + 1].startsWith('|')) {
          if (linkable) return <Link to={linkable} key={dv}>{dv.trim().concat(', ')}</Link>;
          return dv.trim().concat(', ');
        }
        if (linkable) return <Link to={linkable} key={dv}>{dv}</Link>;
        return dv;
      })}
    </li>
  );
};

export default DependsView;
