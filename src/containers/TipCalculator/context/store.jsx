import { createContext } from 'react';

export const initialState = {
  bill: '',
  percentage: '',
  people: '',
  isPeopleError: false,
  tip: '0.00',
  total: '0.00',
}

export const store = createContext(initialState);