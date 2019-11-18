import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Packages from './components/Packages';
import initializePackages from './actions/packageActions';

const App = (props) => {

  App.propTypes = {
    initializePackages: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.initializePackages();
  }, []);

  return (
    <div>
      <Packages />
    </div>
  );
};

export default connect(null, { initializePackages })(App);
