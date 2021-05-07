import React, { useEffect, useState } from 'react';

import TFBAutocomplete from '../layout/Autocomplete';
import { getSymbols } from '../../utils/getData';

const ChartTopBar = props => {
	const [symbols, setSymbols] = useState();

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
						props.updateSymbol(ticker);
					}
				}}
			/>
		</div>
	);
};

export default ChartTopBar;
