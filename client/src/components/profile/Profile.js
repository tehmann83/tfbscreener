import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import ProfileAbout from './ProfileAbout';
import ProfileEducation from './ProfileEducation';
import ProfileExperience from './ProfileExperience';
import ProfileGithub from './ProfileGithub';
import ProfileTop from './ProfileTop';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';

const Profile = ({
	match,
	getProfileById,
	profile: { profile, loading },
	auth
}) => {
	useEffect(() => {
		getProfileById(match.params.id);
	}, [match.params.id, getProfileById]);

	return (
		<>
			{profile === null || loading ? (
				<Spinner />
			) : (
				<>
					<Link to="/profiles" className="btn btn-light">
						Back to profiles
					</Link>
					{auth.isAuthenticated &&
						auth.loading === false &&
						auth.user._id === profile.user._id && (
							<Link to="/edit-profile" className="btn btn-dark">
								Edit Profile
							</Link>
						)}
					<div className="profile-grid my-1">
						<ProfileTop profile={profile} />
						<ProfileAbout profile={profile} />
						{profile.experience.length > 0 && (
							<>
								<div className="profile-exp bg-white p-2">
									<h2 className="text-primary">Experience</h2>
									{profile.experience.map(experience => (
										<ProfileExperience
											key={experience._id}
											experience={experience}
										/>
									))}
								</div>
							</>
						)}
						{profile.education.length > 0 && (
							<>
								<div className="profile-edu bg-white p-2">
									<h2 className="text-primary">Education</h2>
									{profile.education.map(education => (
										<ProfileEducation
											key={education._id}
											education={education}
										/>
									))}
								</div>
							</>
						)}
						{profile.githubusername && (
							<ProfileGithub username={profile.githubusername} />
						)}
					</div>
				</>
			)}
		</>
	);
};

Profile.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
