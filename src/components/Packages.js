import React from 'react';
import { connect } from 'react-redux';
import PackageDetails from './Package';

/*
I would rather call packageData package instead, but it's a reserved word.
Keying with the package name should be fine since there should never be a duplicate in the text file
*/

const Packages = (props) => {
  const packageArray = Object.values(props.packages);
  return (
    <ul>
      {packageArray.map((packageData) => (
        <PackageDetails
          key={packageData.Package}
          packageName={packageData.Package}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  packages: state.packages,
});

const connectedPackages = connect(mapStateToProps)(Packages);

export default connectedPackages;
