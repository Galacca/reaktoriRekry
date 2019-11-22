import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    <ul>
      {Object.entries(props.package).map(([key, value]) => {
      // Make the links in homepage: field actual links
        if (value.startsWith('http')) {
          value = <a href={value}>{value}</a>;
        }
        // With all due respect to eslint this looks clearer.
        // eslint-disable-next-line react/jsx-one-expression-per-line
        return (<li key={key}> {key}: {value} </li>);
      })}
      <Link to="/">
        <button type="button">Back</button>
      </Link>
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => ({
  package: state.packages[ownProps.packageToShow],
});


const connectedPackageSingleView = connect(mapStateToProps)(PackageSingleView);

export default connectedPackageSingleView;
