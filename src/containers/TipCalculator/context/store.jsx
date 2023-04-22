import { createContext } from 'react';

export const initialState = {
  bill: 0,
  percentage: 0,
  people: 0,
  tip: '0.00',
  total: '0.00',
}

export const store = createContext(initialState);