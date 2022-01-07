import { Link, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="x-large">catchy trading name here </h1>
					<p className="lead">
						Charts, Trading, Watchlists, Social, other stuff (paper trading?, AI
						trading !!!, price alerts, screener, news, each company single page
						plus analysis, twitter bot, ...)
					</p>
					<div className="buttons">
						<Link to="/register" className="btn btn-primary">
							Sign Up
						</Link>
						<Link to="/login" className="btn btn-light">
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
