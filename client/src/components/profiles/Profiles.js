import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileItem from './ProfileItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className="container">
					<h1 className="large text-primary1">Traders</h1>
					<p className="lead">
						<FontAwesomeIcon icon={faConnectdevelop} />
						{'  '} Browse and connect with traders
					</p>
					<div className="profiles">
						{profiles.length > 0 ? (
							profiles.map(profile => (
								<ProfileItem key={profile._id} profile={profile} />
							))
						) : (
							<h4>No profiles found</h4>
						)}
					</div>
				</div>
			)}
		</>
	);
};

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});
export default connect(mapStateToProps, { getProfiles })(Profiles);
