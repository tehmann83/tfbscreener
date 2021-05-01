import React, { useEffect, useState } from 'react';

import TFBAutocomplete from '../layout/Autocomplete';
import { getSymbols } from '../../utils/getSymbols';

const ChartTopBar = () => {
	const [symbols, setSymbols] = useState();
	const [selectedSymbol, setSelectedSymbol] = useState('');

	useEffect(() => {
		const fetchSymbols = async () => {
			let allSymbols = await getSymbols();
			allSymbols = allSymbols.map(item => {
				const splitted = item.split();
				const ticker = splitted[0];
				return { ticker };
			});
			setSymbols(allSymbols);
		};

		fetchSymbols();
	}, [setSymbols]);

	return (
		<div>
			<TFBAutocomplete
				list={symbols}
				setFunc={e => {
					if (e !== null) {
						const ticker = e.split(',')[0];
						setSelectedSymbol(ticker);
					}
				}}
			/>
			{selectedSymbol && <span>{selectedSymbol}</span>}
		</div>
	);
};

export default ChartTopBar;
