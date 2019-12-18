import React, { Component } from 'react';

//components
import { AppContext } from '../app-provider/app-provider';
import { SelectableTile, DisableTitle, DeletableTile } from '../coin-grid/coin-grid-layout';
import CoinHeaderGrid from '../coin-header-grid/coin-header-grid';
import CoinImage from '../coin-image/coin-image';

export default class CoinTile extends Component {
	clickHandler(topSection, coinKey, addCoin, removeCoin) {
		return topSection ? removeCoin(coinKey) : addCoin(coinKey);
	}

	render() {
		const { coinKey, topSection } = this.props;

		return (
			<AppContext.Consumer>
				{({ coinList, addCoin, removeCoin, isInFavorites }) => {
					let TileClass = SelectableTile;
					let coin = coinList[coinKey];

					if (topSection) {
						TileClass = DeletableTile
					} else if (isInFavorites(coinKey)) {
						TileClass = DisableTitle
					}

					return (
						<TileClass
							onClick={() =>
								this.clickHandler(
									topSection,
									coinKey,
									addCoin,
									removeCoin,
									isInFavorites,
								)
							}>
							<CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
							<CoinImage coin={coin} />
						</TileClass>
					);
				}}
			</AppContext.Consumer>
		);
	}
}
