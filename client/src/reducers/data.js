import {
	GET_TIMESERIES,
	TIMESERIES_ERROR,
	UPDATE_TIMESERIES
} from '../actions/types';

const initialState = {
	symbol: null,
	symbols: [],
	loading: true,
	error: {}
};

// eslint-disable-next-line
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_TIMESERIES:
		case UPDATE_TIMESERIES:
			return {
				...state,
				symbol: payload,
				loading: false
			};
		case TIMESERIES_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
				symbol: null
			};
		default:
			return state;
	}
}
