import React from 'react';
import StateProvider from './context/StateProvider';
import './TipCalculator.css';
import BlockWrapper from './containers/BlockWrapper';
import { BLOCK_TYPES } from './consts';

function TipCalculator() {
  return (
    <StateProvider>
      <div className="TipCalculator">
        <div className="TipCalculator__form">
          <BlockWrapper type={BLOCK_TYPES.BILL} />
          <BlockWrapper type={BLOCK_TYPES.PERCENTAGE} />
          <BlockWrapper type={BLOCK_TYPES.PEOPLE} />
        </div>
        <div className="TipCalculator__display">
          <div className="TipCalculator__strings">
            <BlockWrapper type={BLOCK_TYPES.TOTAL} />
            <BlockWrapper type={BLOCK_TYPES.TIP} />
          </div>
          <BlockWrapper type={BLOCK_TYPES.RESET} />
        </div>
      </div>
    </StateProvider>
  );
}

export default TipCalculator;
