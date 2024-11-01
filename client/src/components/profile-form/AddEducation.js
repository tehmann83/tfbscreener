import { Link, withRouter } from 'react-router-dom';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profile';
import { connect } from 'react-redux';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const AddEducation = ({ addEducation, history }) => {
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: false,
		description: ''
	});

	const {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		description,
		current
	} = formData;

	const [toDateDisabled, toggleDisabled] = useState(false);

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<div className="container">
			<h1 className="large text-primary1">Add Your Education</h1>
			<p className="lead">
				<FontAwesomeIcon icon={faGraduationCap} /> Add any school, bootcamp, etc
				that you have attended
			</p>
			<small>* = required field</small>
			<form
				className="form"
				onSubmit={e => {
					e.preventDefault();
					addEducation(formData, history);
				}}
			>
				<div className="form-group">
					<input
						type="text"
						placeholder="* School or Bootcamp"
						name="school"
						value={school}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="* Degree or Certificate"
						name="degree"
						value={degree}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Field Of Study"
						name="fieldofstudy"
						value={fieldofstudy}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<h4>From Date</h4>
					<input
						type="date"
						name="from"
						value={from}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<p>
						<input
							type="checkbox"
							name="current"
							checked={current}
							value={current}
							onChange={e => {
								setFormData({ ...formData, current: !current });
								toggleDisabled(!toDateDisabled);
							}}
						/>{' '}
						Current School or Bootcamp
					</p>
				</div>
				<div className="form-group">
					<h4>To Date</h4>
					<input type="date" name="to" value={to} onChange={e => onChange(e)} />
				</div>
				<div className="form-group">
					<textarea
						name="description"
						cols="30"
						rows="5"
						placeholder="Program Description"
						value={description}
						onChange={e => onChange(e)}
					></textarea>
				</div>
				<input type="submit" className="btn btn-primary my-1" />
				<Link className="btn btn-light my-1" to="/dashboard">
					Go Back
				</Link>
			</form>
		</div>
	);
};

AddEducation.propTypes = {
	addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));
