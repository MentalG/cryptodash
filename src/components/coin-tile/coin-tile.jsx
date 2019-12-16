import React, { Component } from 'react';

//components
import { AppContext } from '../app-provider/app-provider';
import { SelectableTitle } from '../coin-grid/coin-grid-layout';
import CoinHeaderGrid from '../coin-header-grid/coin-header-grid';
import CoinImage from '../coin-image/coin-image';

export default class CoinTile extends Component {
	render() {
		const { coinKey } = this.props;

		return (
			<AppContext.Consumer>
				{({ coinList }) => {
					const TileClass = SelectableTitle;
					let coin = coinList[coinKey];

					return <TileClass>
                        <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
                        <CoinImage coin={coin}/>
                    </TileClass>;
				}}
			</AppContext.Consumer>
		);
	}
}
