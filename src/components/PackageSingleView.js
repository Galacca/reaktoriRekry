import React from 'react';
import { connect } from 'react-redux';

const PackageSingleView = (props) => {
  return (
    <div>
      {props.package.Package}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  package: state.packages[ownProps.packageName],
});


const connectedPackageSingleView = connect(mapStateToProps)(PackageSingleView);

export default connectedPackageSingleView;
