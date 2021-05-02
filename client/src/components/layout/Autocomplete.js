import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
	const classes = useStyles();

	return (
		<div style={{ width: 300 }}>
			<Autocomplete
				id="tfbautocomplete"
				classes={classes}
				autoComplete={true}
				selectOnFocus={true}
				onChange={(e, v) => {
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
