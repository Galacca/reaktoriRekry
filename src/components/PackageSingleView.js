import React from 'react';
import { connect } from 'react-redux';

const PackageSingleView = (props) => {
  // This if statement prevents the app from crashing if the page is refreshed while on this view
  if (!props.package) {
    return (
      <div>
      Loading...
      </div>
    );
  }
  return (
    // Make the links in homepage: field actual links
    Object.entries(props.package).map(([key, value]) => {
      if (value.startsWith('http')) {
        value = <a href={value}>{value}</a>;
      }
      // With all due respect to eslint this looks clearer.
      // eslint-disable-next-line react/jsx-one-expression-per-line
      return (<ul><li> {key} : {value} </li></ul>);
    })
  );
};

const mapStateToProps = (state, ownProps) => ({
  package: state.packages[ownProps.packageToShow],
});


const connectedPackageSingleView = connect(mapStateToProps)(PackageSingleView);

export default connectedPackageSingleView;
