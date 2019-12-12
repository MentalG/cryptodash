import React from 'react';

//components
import WelcomeMessage from '../welcome-message/welcome-message'

//style
import './app.css';
import styled, { css } from 'styled-components'

function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
    );
}

export default App;
