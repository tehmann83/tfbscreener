import './App.css';

import React, { Fragment, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AddEducation from './components/profile-form/AddEducation';
import AddExperience from './components/profile-form/AddExperience';
import Alert from './components/layout/Alert';
import CreateProfile from './components/profile-form/CreateProfile';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/profile-form/EditProfile';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';
import Profile from './components/profile/Profile';
import Profiles from './components/profiles/Profiles';
import { Provider } from 'react-redux';
import Register from './components/auth/Register';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/" component={Landing} />
					<section className="container">
						<Alert />
						<Switch>
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/profiles" component={Profiles} />
							<Route exact path="/profile/:id" component={Profile} />
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
							<PrivateRoute
								exact
								path="/create-profile"
								component={CreateProfile}
							/>
							<PrivateRoute
								exact
								path="/edit-profile"
								component={EditProfile}
							/>
							<PrivateRoute
								exact
								path="/add-experience"
								component={AddExperience}
							/>
							<PrivateRoute
								exact
								path="/add-education"
								component={AddEducation}
							/>
						</Switch>
					</section>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
