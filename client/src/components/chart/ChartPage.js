import React, { useState } from 'react';

import ChartTopBar from './ChartTopBar';
import { getTimeSeries } from '../../utils/getData';

//import PropTypes from 'prop-types';

const Chart = () => {
	const [symbol, setSymbol] = useState('');
	const [timeseries, setTimeseries] = useState('');

	const updateCurrentSymbol = async ticker => {
		setSymbol(ticker);

		// get timeseries for ticker
		const ts = await getTimeSeries(ticker);
		setTimeseries(ts);

		// todo: update chart with new ticker

		// todo: if logged in, remember last ticker selected
	};

	return (
		<div className="chart-page">
			<ChartTopBar updateSymbol={updateCurrentSymbol} />
			<span>test</span>
			{symbol && <span>{symbol}</span>}
		</div>
	);
};

//Chart.propTypes = {};

export default Chart;
