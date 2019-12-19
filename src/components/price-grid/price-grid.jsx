import React, { Component } from 'react';

//components
import { AppContext } from '../app-provider/app-provider';
import { PriceGridLayout } from './price-grid-layout';
import PriceTile from '../price-tile/price-tile';

export default class PriceGrid extends Component {
	render() {
		return (
			<AppContext>
				{({ prices }) => (
					<PriceGridLayout>
						{prices.map((price) => (
							<PriceTile price={price}/>
						))}
					</PriceGridLayout>
				)}
			</AppContext>
		);
	}
}
