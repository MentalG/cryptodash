import React from 'react';

//components
import WelcomeMessage from '../welcome-message/welcome-message'

//style
import './app.css';
import AppLayout from '../app-layout/app-layout'
// import styled, { css } from 'styled-components'

function App() {
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
    );
}

export default App;
