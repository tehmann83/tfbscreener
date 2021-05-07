import React, { useState } from 'react';

import ChartTopBar from './ChartTopBar';
import PropTypes from 'prop-types';
import TFBChart from './TFBChart';
import { connect } from 'react-redux';
import { getTimeSeries } from '../../utils/getData';
import { setTimeSeries } from '../../actions/data';

const ChartPage = ({ setTimeSeries }) => {
	const [symbol, setSymbol] = useState('');
	const [timeseries, setTimeseries] = useState('');

	const updateCurrentSymbol = async ticker => {
		setSymbol(ticker);

		// get timeseries for ticker
		let ts = await getTimeSeries(ticker);
		console.log('ts ChartPage.js, ', ts);

		// update chart with new ticker
		setTimeseries(ts);

		let data = {};
		data.name = ts['Meta Data']['2. Symbol'];
		data.timeseries = ts['Time Series (Daily)'];
		data.date = ts['Meta Data']['3. Last Refreshed'];

		data.timeseries.open = data.timeseries['1. open'];
		data.timeseries.high = data.timeseries['2. high'];
		data.timeseries.low = data.timeseries['3. low'];
		data.timeseries.close = data.timeseries['4. close'];
		data.timeseries.volume = data.timeseries['6. volume'];

		console.log(`Direkt von ChartPage: ${JSON.stringify(data)}`);

		setTimeSeries(data);
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

ChartPage.propTypes = {
	setTimeSeries: PropTypes.func.isRequired
};

export default connect(null, { setTimeSeries })(ChartPage);
