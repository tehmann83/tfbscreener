import React, { useState } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const CustomPaper = props => {
	return <Paper elevation={8} {...props} />;
};

const useStyles = makeStyles(theme => ({
	inputRoot: {
		color: 'purple',
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'purple'
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: 'limegreen'
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: 'purple'
		}
	},
	paper: {
		border: '4px solid purple'
	},
	'@global': {
		'.MuiAutocomplete-option[data-focus="true"]': {
			background: 'limegreen'
		}
	}
}));

const TFBAutocomplete = ({ list, setFunc }) => {
	const [value, setValue] = useState('');
	const classes = useStyles();

	return (
		<div style={{ width: 300 }}>
			<Autocomplete
				//open={true}
				id="tfbautocomplete"
				//classes={{ paper: classes.paper }}
				classes={classes}
				autoComplete={true}
				selectOnFocus={true}
				onChange={(e, v) => {
					//setValue(v);
					setFunc(v);
				}}
				options={list.map(option => option.ticker)}
				renderInput={params => (
					<TextField
						{...params}
						label="search symbol"
						margin="normal"
						variant="outlined"
					/>
				)}
			/>
		</div>
	);
};

TFBAutocomplete.defaultProps = {
	list: []
};

TFBAutocomplete.propTypes = {
	list: PropTypes.array.isRequired,
	setFunc: PropTypes.func.isRequired
};

export default TFBAutocomplete;
