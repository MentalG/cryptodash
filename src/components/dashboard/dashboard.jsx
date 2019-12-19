import React, { Component } from 'react';
import Page from '../page/page';
import PriceGrid from '../price-grid/price-grid';

export default class Dashboard extends Component {
	render() {
		return <Page name={'dashboard'}>
            Dashboard
            <PriceGrid />
        </Page>
	}
}
