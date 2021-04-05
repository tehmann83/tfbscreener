import {
	faGraduationCap,
	faUserCircle
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';

const DashboardActions = () => {
	return (
		<>
			<div class="dash-buttons">
				<Link to="/edit-profile" class="btn btn-light">
					<FontAwesomeIcon icon={faUserCircle} /> Edit Profile
				</Link>
				<Link to="/add-experience" class="btn btn-light">
					<FontAwesomeIcon icon={faBlackTie} /> Add Experience
				</Link>
				<Link to="/add-education" class="btn btn-light">
					<FontAwesomeIcon icon={faGraduationCap} /> Add Education
				</Link>
			</div>
		</>
	);
};

export default DashboardActions;
