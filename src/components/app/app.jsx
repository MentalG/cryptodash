import React from 'react';

//components
import AppBar from '../app-bar/app-bar'
import WelcomeMessage from '../welcome-message/welcome-message'

//styles
import { AppLayout } from './app-layout'

function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
    );
}

export default App;
