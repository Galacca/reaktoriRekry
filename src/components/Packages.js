import React from 'react';
import { connect } from 'react-redux';
import PackageDetails from './Package';

/*
I would rather call packageData package instead, but it's a reserved word.
Keying with the package name should be fine since there should never be a duplicate in the text file
*/

const Packages = (props) => {
  return (
    <ul>
      {props.packages.map((packageData) => (
        <PackageDetails
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
