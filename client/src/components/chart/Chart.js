import React, { useState } from 'react';

import ChartTopBar from './ChartTopBar';

//import PropTypes from 'prop-types';

const Chart = () => {
	const [symbol, setSymbol] = useState('');

	return (
		<div className="chart-page">
			<ChartTopBar updateSymbol={setSymbol} />
			<span>test</span>
			{symbol && <span>{symbol}</span>}
		</div>
	);
};

//Chart.propTypes = {};

export default Chart;
