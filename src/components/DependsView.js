import React from 'react';
import { Link } from 'react-router-dom';
import getPackageNames, { addPipes } from '../utils/helperParser';

/* So this got a bit complicated, but dealing with the depends fields and the pipes
was pretty challenging and getting away with clean looking code was just not gonna happen.
Specially with the need of a second parser that kept snipping things out from here and there.
*/

const DependsView = (props) => {
  const renderDep = (dependency) => {
    const packageNames = getPackageNames(dependency);
    const components = packageNames.map(packageName => {
      if (props.packages[packageName.withoutVersion]) {
        return <Link key={packageName.withVersion} to={`/packages/${packageName.withoutVersion}`}>{packageName.withVersion}</Link>;
      }
      return packageName.withVersion;
    });
    return components.length > 1 ? addPipes(components) : components;
  };
  const renderDeps = () => props.dependsValue.map((dependency, index) => {
    return (
      // Bring back dots and white spaces who fell victim to the second parser.
      <React.Fragment key={dependency}>
        {renderDep(dependency)}
        {index < props.dependsValue.length -1 && ', '}
      </React.Fragment>
    );
  });

  return (
    <li>Depends: {renderDeps()}</li>
  );
};

export default DependsView;
