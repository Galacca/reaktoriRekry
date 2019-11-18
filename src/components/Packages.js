import React from 'react';
import { connect } from 'react-redux';

const Packages = (props) => (
  <div>{Object.keys(props.packages)}</div>
);

const mapStateToProps = (state) => ({
  packages: state.packages,
});

const connectedPackages = connect(mapStateToProps)(Packages);

export default connectedPackages;
