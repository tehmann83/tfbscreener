const express = require('express');
const axios = require('axios').default;
const router = express.Router();
const Ticker = require('../../models/Ticker');
const yahooFinance = require('yahoo-finance');

// @route   GET api/data/yahoo/timeseries/:ticker
// @desc    Get timeseries
// @access  todo: Public only from DB/ todo: Private after threshold
router.get('/yahoo/timeseries/:ticker', async (req, res) => {
	try {
		const today = new Date();
		const todayString = new Date(
			today.getTime() - today.getTimezoneOffset() * 60000
		)
			.toISOString()
			.split('T')[0];

		const timeSeries = await yahooFinance.historical({
			symbol: req.params.ticker,
			from: new Date(Date.now() - 3600 * 1000 * 24 * 1000),
			to: todayString
		});

		console.log('timeSeries::::', timeSeries);

		res.json(timeSeries);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error. Fetching time series failed.');
	}
});

router.get('/yahoo/data/:ticker', async (req, res) => {
	try {
		const data = await yahooFinance.quote(req.params.ticker, [
			'calendarEvents',
			'defaultKeyStatistics',
			'earnings',
			'financialData',
			'price',
			'recommendationTrend',
			'summaryDetail',
			'summaryProfile',
			'upgradeDowngradeHistory'
		]);

		console.log('ticker data: ', data);

		res.json(data);
	} catch (error) {}
});

// @route   GET api/data/alphavantage/timeseries/:ticker
// @desc    Get timeseries
// @access  todo: Public only from DB/ todo: Private after threshold
router.get('/alphavantage/timeseries/:ticker', async (req, res) => {
	try {
		const response = await axios.get(
			`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${req.params.ticker}&outputsize=compact&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
		);

		res.json(response.data);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error. Fetching time series failed.');
	}
});

// @route   GET api/data/database/timeseries/:ticker
// @desc    Get timeseries
// @access  todo: Public only from DB/ todo: Private after threshold
router.get('/database/timeseries/:ticker', async (req, res) => {
	try {
		const ticker = await Ticker.findOne({
			name: req.params.ticker
		});

		res.json(ticker);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error. Fetching time series failed.');
	}
});

// @route   POST api/data/database/timeseries/:ticker
// @desc    Set timeseries in db
// @access  Public
router.post('/database/timeseries', async (req, res) => {
	const data = req.body;

	try {
		let ticker = await Ticker.findOne({ name: data.name });

		if (ticker) {
			// update
			// todo: just add missing time series data, check last date and weekends/holidays

			const filter = { ticker: data.name };
			const update = { timeseries: data.timeseries };

			ticker = await Ticker.findOneAndUpdate(filter, update);

			return res.json(ticker);
		}

		ticker = new Ticker(data);

		await ticker.save();
		res.json(ticker);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
