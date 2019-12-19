import React, { Component } from 'react';
import { AppContext } from '../app-provider/app-provider';

//components
import { CoinGridStyled } from './coin-grid-layout';
import CoinTile from '../coin-tile/coin-tile';

export default class CoinGrid extends Component {
	getCoins = (object, length, number) => object.slice(length - number - 1);

	getLowerSectionCoins(filteredCoins, allCoins) {
		return (filteredCoins && Object.keys(filteredCoins)) || allCoins;
	}

	getCoinsToDisplay(object, isTopSection, favorites, filteredCoins) {
		const objectKeys = Object.keys(object);
		const lenghtOfObject = objectKeys.length;
		const allCoins = this.getCoins(objectKeys, lenghtOfObject, 200);

		return isTopSection
			? favorites
			: this.getLowerSectionCoins(filteredCoins, allCoins);
	}

	render() {
		const { topSection } = this.props;

		return (
			<AppContext.Consumer>
				{({ coinList, favorites, filteredCoins }) => (
					<CoinGridStyled>
						{this.getCoinsToDisplay(
							coinList,
							topSection,
							favorites,
							filteredCoins,
						).map((coinKey, key) => {
							return (
								<CoinTile key={key} coinKey={coinKey} topSection={topSection} />
							);
						})}
					</CoinGridStyled>
				)}
			</AppContext.Consumer>
		);
	}
}
