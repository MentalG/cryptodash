import React from 'react';
import { AppProvider } from '../app-provider/app-provider';

//components
import AppBar from '../app-bar/app-bar'
import Settings from '../settings/settings'

//styles
import { AppLayout } from './app-layout'

function App () {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
