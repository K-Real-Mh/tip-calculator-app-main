import React from 'react';
import StateProvider from './context/StateProvider';
import './TipCalculator.css';

function TipCalculator() {
  return (
    <StateProvider>
      <div className="TipCalculator">Tip Calculator</div>
    </StateProvider>
  );
}

export default TipCalculator;