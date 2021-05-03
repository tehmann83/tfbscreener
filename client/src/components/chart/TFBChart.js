import { Chart, ChartCanvas } from 'react-stockcharts';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { last, timeIntervalBarWidth } from 'react-stockcharts/lib/utils';

import { CandlestickSeries } from 'react-stockcharts/lib/series';
import PropTypes from 'prop-types';
import React from 'react';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { scaleTime } from 'd3-scale';
import { utcDay } from 'd3-time';

const TFBChart = props => {
	const data = props;
	console.log('data in chart: ', data);
	return <div>chart here</div>;
};

TFBChart.propTypes = {};

export default TFBChart;
