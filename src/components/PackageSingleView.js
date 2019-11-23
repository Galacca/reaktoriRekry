import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DependsView from './DependsView';

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
      {Object.keys(props.package).map((key) => {
      // Make the links in homepage: field actual links
        if (key.startsWith('Homepage') && props.package[key].startsWith('http')) {
          return (<li key={key}> {key}: <a href={props.package[key]}>{props.package[key]}</a></li>);
        }
        // Make the navigation from depends menu possible.
        if (key === 'Depends') {
          return (
            <DependsView
              key={props.package[key]}
              dependsValue={props.package[key]}
              packages={props.packages}
            />
          );
        }
        // With all due respect to eslint this looks clearer.
        // eslint-disable-next-line react/jsx-one-expression-per-line
        return (<li key={key}> {key}: {props.package[key]}</li>);
      })}
      <Link to="/">
        <button type="button">Back to package list</button>
      </Link>
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => ({
  package: state.packages[ownProps.packageToShow],
  packages: state.packages,
});


const connectedPackageSingleView = connect(mapStateToProps)(PackageSingleView);

export default connectedPackageSingleView
;