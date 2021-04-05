import React, { useEffect } from 'react';

import DashboardActions from './DashboardActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading }
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile == null ? (
		<Spinner />
	) : (
		<>
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">
				<FontAwesomeIcon icon={faUser} />
				{'  '} Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<>
					<DashboardActions />
				</>
			) : (
				<>
					<p>Nothing to show yet! Please add some info.</p>
					<Link to="/create-profile" className="btn btn-primary my-1">
						Create Profile
					</Link>
				</>
			)}
		</>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
