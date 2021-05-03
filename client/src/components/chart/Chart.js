import React, { useState } from 'react';

import ChartTopBar from './ChartTopBar';
import { getTimeSeries } from '../../utils/getData';

//import PropTypes from 'prop-types';

const Chart = () => {
	const [symbol, setSymbol] = useState('');

	const updateCurrentSymbol = async ticker => {
		setSymbol(ticker);
		// todo: get timeseries for ticker
		const timeseries = await getTimeSeries(ticker);
		console.log('here it is: ', timeseries);
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
