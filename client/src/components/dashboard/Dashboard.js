import React, { useEffect } from 'react';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import { faUser, faUserMinus } from '@fortawesome/free-solid-svg-icons';

import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
	deleteAccount
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile == null ? (
		<Spinner />
	) : (
		<div className="container">
			<h1 className="large text-primary1">Dashboard</h1>
			<p className="lead">
				<FontAwesomeIcon icon={faUser} />
				{'  '} Welcome {user && user.name}
			</p>
			<p className="lead" style={{ height: 300 }}>
				HIER ANDERES ZEUG ALS CV SHIT
			</p>
			{profile !== null ? (
				<>
					<DashboardActions />
					<Experience experience={profile.experience} />
					<Education education={profile.education} />

					<div className="my-2">
						<button className="btn btn-danger" onClick={() => deleteAccount()}>
							<FontAwesomeIcon icon={faUserMinus} /> Delete my account
						</button>
					</div>
				</>
			) : (
				<>
					<p>Nothing to show yet! Please add some info.</p>
					<Link to="/create-profile" className="btn btn-primary my-1">
						Create Profile
					</Link>
				</>
			)}
		</div>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);
