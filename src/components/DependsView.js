import React from 'react';
import { Link } from 'react-router-dom';
import isLinkable from '../utils/linker';

const DependsView = (props) => {
  return (
    <li>
Depends:
      {props.dependsValue.map((dv, index) => {
        const linkable = isLinkable(dv, props.packages);
        if (index + 1 !== props.dependsValue.length && !props.dependsValue[index + 1].startsWith('|')) {
          if (linkable) return <Link to={linkable} key={dv}>{dv.concat(', ')}</Link>;
          return dv.concat(', ');
        }
        if (linkable) return <Link to={linkable} key={dv}>{dv}</Link>;
        return dv;
      })}
    </li>
  );
};

export default DependsView;
