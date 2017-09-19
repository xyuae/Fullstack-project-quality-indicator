'use strict';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from '../containers/Template';
import { App } from '../components/App';
import { Whoops404 } from '../styled/Whoops404';
import '../stylesheets/schneider-base.css';
// import '../stylesheets/index.scss';

const createRoutes = () => {
	return (
		<Route
			path='/'
			component={Template}
		>
			<IndexRoute component={App}/>
			<Route path='project-list' component={App}>
				<Route path=':filter' component={App}/>	
			</Route>
			<Route path='add-project' component={App}/>
			<Route path='*' component={Whoops404}/>
		</Route>
	);	// return
};	// const createRoutes

const Routes = createRoutes();

export default Routes;
