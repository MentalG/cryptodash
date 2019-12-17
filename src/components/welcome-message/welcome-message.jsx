import React from 'react';
import { AppContext } from '../app-provider/app-provider';

//style
import './welcome-message.css';

const WelcomeMessage = () => {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) =>
				firstVisit ? (
					<div className={'welcome'}>
						Welcome to CryptoDash, please select your favorite coins to begin.{' '}
					</div>
				) : null
			}
		</AppContext.Consumer>
	);
};

export default WelcomeMessage;
