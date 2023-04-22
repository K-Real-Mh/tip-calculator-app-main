import React from 'react';
import { TipCalculator } from './containers';
import './App.css';
import { Icon } from './components/index';

function App() {
  return (
    <div className="App">
      <Icon name="LogoIcon" width="87" height="54" color="var(--logo-icon-cyan)" className="App__icon" />
      <TipCalculator />
    </div>
  );
}

export default App;
