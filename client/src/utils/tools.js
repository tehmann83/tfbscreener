export const formatAlphaVantageData = data => {
	const tsData = data['Time Series (Daily)'];
	const name = data['Meta Data']['2. Symbol'];

	return {
		name,
		data: Object.entries(tsData)
			.map(entry => {
				const [date, priceData] = entry;

				return {
					date: new Date(date),
					open: Number(priceData['1. open']),
					high: Number(priceData['2. high']),
					low: Number(priceData['3. low']),
					close: Number(priceData['4. close']),
					volume: Number(priceData['5. volume'])
				};
			})
			.reverse()
	};
};
