import React, { useState } from 'react';

import ChartTopBar from './ChartTopBar';
import TFBChart from './TFBChart';
import { getTimeSeries } from '../../utils/getData';

//import PropTypes from 'prop-types';

const ChartPage = () => {
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
			{symbol && timeseries && <TFBChart data={timeseries} />}
			{timeseries && <p>{JSON.stringify(timeseries)}</p>}
		</div>
	);
};

//ChartPage.propTypes = {};

export default ChartPage;
