import React from 'react';
import { AppProvider } from '../app-provider/app-provider';

//components
import AppBar from '../app-bar/app-bar';
import Settings from '../settings/settings';
import Content from '../content/content';

//styles
import { AppLayout } from './app-layout';

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<Content>
					<Settings />
				</Content>
			</AppProvider>
		</AppLayout>
	);
}

export default App;
