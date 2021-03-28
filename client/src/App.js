import './App.css';

import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';

const App = () => (
	<Router>
		<Fragment>
			<Navbar />
			<Route exact path="/" component={Landing} />
			<section className="container">
				<Switch>
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</section>
		</Fragment>
	</Router>
);

export default App;
