import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import localForage from 'localforage';

const cache = setupCache({
	maxAge: 60 * 60 * 1000,
	store: localForage
});

export const getSymbols = market => {
	const axiosInstance = axios.create({
		baseURL: market,
		adapter: cache.adapter
	});

	return axiosInstance
		.get('')
		.then(res => res.data)
		.then(res => res.split('\n').splice(1));
};

export const getTimeSeriesFromAlpha = async ticker => {
	try {
		const res = await axios.get(`/api/data/alphavantage/timeseries/${ticker}`);

		return res.data;
	} catch (error) {}
};

export const getTimeSeriesFromYahoo = async ticker => {
	try {
		const res = await axios.get(`/api/data/yahoo/timeseries/${ticker}`);

		return res.data;
	} catch (error) {}
};

export const getTickerDataFromYahoo = async ticker => {
	try {
		const res = await axios.get(`/api/data/yahoo/data/${ticker}`);

		return res.data;
	} catch (error) {}
};
