import React, { Component } from 'react';

//components
import { SearchGrid, SearchInpout } from './search-layout';

export default class Search extends Component {
	render() {
		return (
			<SearchGrid>
				<h2>Search all coins</h2>
                <SearchInpout />
			</SearchGrid>
		);
	}
}
