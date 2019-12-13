import React, { Component } from 'react';
import { AppContext } from '../app-provider/app-provider';

export default class Page extends Component {
	render() {
		const { name, children } = this.props;

		return (
			<AppContext.Consumer>
				{({ page }) => {
					if (page !== name) {
						return null;
					}
					return <div>{children}</div>;
				}}
			</AppContext.Consumer>
		);
	}
}
