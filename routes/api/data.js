const express = require('express');
const axios = require('axios').default;

const router = express.Router();

// @route   GET api/data/alphavantage/timeseries/:ticker
// @desc    Get user repos from Github
// @access  Public
router.get('/alphavantage/timeseries/:ticker', async (req, res) => {
	try {
		const response = await axios.get(
			`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${req.params.ticker}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
		);

		res.json(response.data);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
