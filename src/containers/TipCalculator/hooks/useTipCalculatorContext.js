import { useContext } from 'react';
import { store } from '../context/store';

export default function useTipCalculatorContext() {
  const context = useContext(store);

  if (!context) {
    throw new Error(
      'useTipCalculatorContext must be used within a TipCalculatorContextProvider'
    );
  }

  return context;
}