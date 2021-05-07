const mongoose = require('mongoose');

const TickerSchema = mongoose.Schema({
	name: String,
	timeseries: {
		type: String,
		get: function (data) {
			try {
				return JSON.parse(data);
			} catch (err) {
				return data;
			}
		},
		set: function (data) {
			return JSON.stringify(data);
		}
	},
	date: String
});

module.exports = Ticker = mongoose.model('ticker', TickerSchema);
