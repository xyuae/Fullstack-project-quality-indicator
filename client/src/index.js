'use strict';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import ReactDOM from 'react-dom';

window.React = React;

ReactDOM.render(
	<Router
		history={browserHistory}
		routes={Routes}
	/>,
	document.getElementById('react-container')
);
