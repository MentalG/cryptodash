import React, { Component } from 'react';

//components
import { AppContext } from '../app-provider/app-provider';
import { SearchGrid, SearchInpout } from './search-layout';

//libaries
import _ from 'lodash'
import fuzzy from 'fuzzy'

export default class Search extends Component {

    handleFilter = _.debounce((value, coins, func) => {
        const coinSymbols = Object.keys(coins)
        const coinNames = coinSymbols.map(symbol => coins[symbol].CoinName)
        const allStringsToSearch = coinSymbols.concat(coinNames)
        const fuzzyResults = fuzzy
            .filter(value, allStringsToSearch)
            .map(result => result.string)
        const filteredCoins = _.pickBy(coins, (result, symbolKey) => {
            const coinName = result.CoinName
            return (_.includes(fuzzyResults, symbolKey) || _.includes(fuzzyResults, coinName))
        })
        
        func(filteredCoins)
    },500)

    filterCoins = (event, coins, func) => {
        const inputValue = event.target.value

        if (!inputValue) {
            func(null)
            return
        }

        this.handleFilter(inputValue, coins, func)
    }

	render() {
		return (
			<AppContext.Consumer>
				{({ setFilteredCoins, coinList }) => {
					return (
						<SearchGrid>
							<h2>Search all coins</h2>
							<SearchInpout onKeyUp={(e) => this.filterCoins(e, coinList, setFilteredCoins)}/>
						</SearchGrid>
					);
				}}
			</AppContext.Consumer>
		);
	}
}
