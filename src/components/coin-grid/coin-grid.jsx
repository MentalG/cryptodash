import React, { Component } from 'react';
import { AppContext } from '../app-provider/app-provider';

//components
import { CoinGridStyled } from './coin-grid-layout';
import CoinTile from '../coin-tile/coin-tile'

export default class CoinGrid extends Component {

	getCoinsToDisplay(object, number = 100, isTopSection) {
		const lenghtOfObject = Object.keys(object).length
		const countOfCoins = number

		return Object.keys(object).slice(lenghtOfObject - countOfCoins - 1);
	}

	render() {
		const { topSection } = this.props
		console.log(topSection);
		

		return (
			<AppContext.Consumer>
				{({ coinList }) => (
					<CoinGridStyled>
						{this.getCoinsToDisplay(coinList, 10, topSection).map((coinKey, key) => {
							return <CoinTile key={key} coinKey={coinKey}/>
						})}
					</CoinGridStyled>
				)}
			</AppContext.Consumer>
		);
	}
}
