import React, { Component } from 'react';
import { AppContext } from '../app-provider/app-provider';

//styles
import { ConfirmButtonStyled, CenterDiv } from './confirm-button-layout';

export default class ConfirmButton extends Component {
	render() {
		return (
			<AppContext.Consumer>
				{({ confirmFavorites }) => 
					<CenterDiv>
						<ConfirmButtonStyled onClick={confirmFavorites}>
							Confirm Favorites
						</ConfirmButtonStyled>
					</CenterDiv>
				}
			</AppContext.Consumer>
		);
	}
}
