import { useEffect } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Packages from './components/Packages';
import initializePackages from './actions/packageActions';
import PackageSingleView from './components/PackageSingleView';

const App = (props) => {

  useEffect(() => {
    props.initializePackages();
  }, []);

  return (
    <div>
      <Router>
        <Route exact path="/" component={Packages} />
        <Route exact path="/packages/:packageName" render={({ match }) => <PackageSingleView packageToShow={match.params.packageName} />} />
      </Router>
    </div>
  );
};

export default connect(null, { initializePackages })(App);
