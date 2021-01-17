import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Header from './Header';

import '../sass/main.scss';
import Repos from './Repos';

const App = () => (
    <div className="main-wrapper">
        <Header />
        <div className="main">
            <Repos />
        </div>
    </div>
);

App.propTypes = {
    message: PropTypes.string,
};

export default hot(module)(App);
