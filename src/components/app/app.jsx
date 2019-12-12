import React from 'react';
import { AppProvider } from '../app-provider/app-provider';

//components
import AppBar from '../app-bar/app-bar'
import WelcomeMessage from '../welcome-message/welcome-message'

//styles
import { AppLayout } from './app-layout'

function App () {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <WelcomeMessage />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
