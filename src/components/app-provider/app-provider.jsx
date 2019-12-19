import React, { Component } from 'react';
import _ from 'lodash';

//API
const cc = require('cryptocompare');

export const AppContext = React.createContext();

//constants
const MAX_FAVORITES = 10;

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'dashboard',
			favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
			...this.savedSettings(),
			setPage: this.setPage,
			addCoin: this.addCoin,
			removeCoin: this.removeCoin,
			isInFavorites: this.isInFavorites,
			setFilteredCoins: this.setFilteredCoins,
			confirmFavorites: this.confirmFavorites,
			coinList: null,
		};
	}

	componentDidMount() {
		this.fetchCoins();
		this.fetchPrices();
	}

	componentDidUpdate() {
		console.log(this.state)
	}

	addCoin = (key) => {
		let favorites = [...this.state.favorites];

		if (favorites.length < MAX_FAVORITES) {
			favorites.push(key);
			this.setState({ favorites });
		}
	};

	removeCoin = (key) => {
		let favorites = [...this.state.favorites];
		this.setState({ favorites: _.pull(favorites, key) });
	};

	isInFavorites = (key) => _.includes(this.state.favorites, key);

	setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	};

	fetchPrices = async () => {
		if(this.state.firstVisit) return;
		let prices = await this.prices();
		this.setState({ prices });
	};
	
	prices = async () => {
		let returnData = [];
		
		for (let i = 0; i <= this.state.favorites.length; i++) {
			try {
				let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
				returnData.push(priceData);
			} catch (e) {
				console.warn('Fetch price error: ', e);
			}
		}
		return returnData; 
	};

	confirmFavorites = () => {
		this.setState(
			{
				firstVisit: false,
				page: 'dashboard',
			},
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				favorites: this.state.favorites,
			}),
		);
	};

	savedSettings() {
		let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

		if (!cryptoDashData) {
			return {
				page: 'settings',
				firstVisit: true,
			};
		}
		let { favorites } = cryptoDashData;
		return { favorites };
	}

	setPage = (page) => this.setState({ page });

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
