import React, { Component } from 'react';
import { AppContext } from '../app-provider/app-provider';

//components
import { CoinGridStyled } from './coin-grid-layout';
import CoinTile from '../coin-tile/coin-tile';

export default class CoinGrid extends Component {

	getCoins = (object, length, number) => object.slice(length - number - 1)

	getCoinsToDisplay(object, isTopSection, favorites) {
		const objectKeys = Object.keys(object);
		const lenghtOfObject = objectKeys.length;
		const allCoins = this.getCoins(objectKeys, lenghtOfObject, 50)

		return isTopSection ? favorites : allCoins
	}

	render() {
		const { topSection } = this.props;

		return (
			<AppContext.Consumer>
				{({ coinList, favorites }) => (
					<CoinGridStyled>
						{this.getCoinsToDisplay(coinList, topSection, favorites).map(
							(coinKey, key) => {
								return <CoinTile key={key} coinKey={coinKey} topSection={topSection}/>;
							},
						)}
					</CoinGridStyled>
				)}
			</AppContext.Consumer>
		);
	}
}
