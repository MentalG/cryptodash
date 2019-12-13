import React, { Component } from 'react';
import { AppContext } from '../app-provider/app-provider';

//components
import { CoinGridStyled } from './coin-grid-layout';

export default class CoinGrid extends Component {
	render() {
		return (
			<AppContext.Consumer>
				{({ coinList }) => (
					<CoinGridStyled>
						{Object.keys(coinList).map((coinKey) => {
							return <div> { coinKey } </div>
						})}
					</CoinGridStyled>
				)}
			</AppContext.Consumer>
		);
	}
}
