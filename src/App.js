import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Packages from './components/Packages';
import initializePackages from './actions/packageActions';
import PackageSingleView from './components/PackageSingleView';
import connectedFindPackageByName from './utils/helperFunctions';

const App = (props) => {
  App.propTypes = {
    initializePackages: PropTypes.func.isRequired,
  };

  console.log(connectedFindPackageByName('libws-commons-util-java'));
  useEffect(() => {
    props.initializePackages();
  }, []);

  return (
    <div>
      <Router>
        <Packages />
        
      </Router>
    </div>
  );
};

export default connect(null, { initializePackages })(App);
// <Route exact path="/packages/:packageName" render={({ match }) => <PackageSingleView packageName={findPackageByName(match.params.Package)} />} />