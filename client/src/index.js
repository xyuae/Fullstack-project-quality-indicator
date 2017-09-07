'use strict';
import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import './stylesheets/index.scss';
import { App } from './components/App';
//import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/common/Layout';
import ContactPage from './components/contact/ContactPage';
import AboutPage from './components/about/AboutPage';
import { LoginPage } from './components/auth/LoginPage';

window.React = React;

render(
	<Router history={browserHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={App}/>
			<Route path='list-projects' component={App}>
				<Route path=':filter' component={App} />
			</Route>
			<Route path='add-project' component={App} />
			<Route path='/about' component={AboutPage}/>
      <Route path='/contact' component={ContactPage}/>
			<Route path='/login' component={LoginPage}/>
			<Route path='*' component={Whoops404}/>
		</Route>
	</Router>,
	document.getElementById('react-container')
);
