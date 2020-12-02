import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Header from './Header';

import '../sass/main.scss';


const App = ({message}) => (
    <Header />
);

App.propTypes = { 
  message: PropTypes.string 
}; 

export default hot(module)(App);