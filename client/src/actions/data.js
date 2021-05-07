import { GET_TIMESERIES, TIMESERIES_ERROR } from './types';

import axios from 'axios';

// Set timeseries
export const setTimeSeries = data => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const body = JSON.stringify(data);
		const res = await axios.post('/api/data/database/timeseries', body, config);

		dispatch({
			type: GET_TIMESERIES,
			payload: JSON.stringify(res.data)
		});
	} catch (error) {
		dispatch({
			type: TIMESERIES_ERROR,
			payload: { msg: error.response.statusText, status: error.response.status }
		});
	}
};
