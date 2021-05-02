import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ProfileAbout = ({
	profile: {
		bio,
		skills,
		user: { name }
	}
}) => {
	const firstName = name.trim().split(' ')[0];

	return (
		<div className="profile-about bg-light p-2">
			{bio && (
				<>
					<h2 className="text-primary1">{firstName}'s Bio</h2>
					<p>{bio}</p>
				</>
			)}

			<div className="line"></div>
			<h2 className="text-primary1">Skill Set</h2>
			{skills && (
				<>
					<div className="skills">
						{skills.map((skill, index) => (
							<div className="p-1" key={`skill_${index}`}>
								<FontAwesomeIcon icon={faCheck} /> {skill}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileAbout;
