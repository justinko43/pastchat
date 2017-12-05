const mainStyle = require('./styles/main.css');

import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx';

// Styles
import './styles/app.less'

render(
    <App />,
    document.getElementById('root')
);