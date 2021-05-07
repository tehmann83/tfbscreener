const express = require('express');
const axios = require('axios').default;

const router = express.Router();
const Ticker = require('../../models/Ticker');

// @route   GET api/data/alphavantage/timeseries/:ticker
// @desc    Get timeseries
// @access  todo: Public only from DB/ todo: Private after threshold
router.get('/alphavantage/timeseries/:ticker', async (req, res) => {
	try {
		const response = await axios.get(
			`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${req.params.ticker}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
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

	let find = await Ticker.findOne({ name: data.name });
	//console.log(`find from api: ${find}`);

	let newTicker = new Ticker(data);

	await newTicker.save();
	res.json(newTicker);
});

module.exports = router;
