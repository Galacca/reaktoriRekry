import React from 'react';
import { connect } from 'react-redux';
import PackageComponent from './Package';

// I would rather call packageData package instead, but it's a reserved word.

const Packages = (props) => {
  return (
  <ul>
    {props.packages.map((packageData) => (
      <PackageComponent
        key={packageData.Package}
        packageName={packageData.Package}
        handleClick={() => null}
      />
    ))}
  </ul>
  );
};

const mapStateToProps = (state) => ({
  packages: Object.values(state.packages),
});

const connectedPackages = connect(mapStateToProps)(Packages);

export default connectedPackages;
