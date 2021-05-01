import axios from 'axios';
import localForage from 'localforage';
import nasdaq_csv from './nasdaq_symbols.csv';
import { setupCache } from 'axios-cache-adapter';

/** note:
 * NASDAQ data coming from:
 * https://datahub.io/core/nasdaq-listings
 */

const cache = setupCache({
	maxAge: 60 * 60 * 1000,
	store: localForage
});

const axiosInstance = axios.create({
	baseURL: nasdaq_csv,
	adapter: cache.adapter
});

export const getSymbols = () => {
	return axiosInstance
		.get('')
		.then(res => res.data)
		.then(res => res.split('\n').splice(1));
};
