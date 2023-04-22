import React, { useReducer } from 'react';
import { initialState, store } from './store';
import { RESET, UPDATE_BILL, UPDATE_PEOPLE, UPDATE_PERCENTAGE } from './actions';

const { Provider } = store;

function StateProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    switch (type) {
      case UPDATE_BILL: {
        const { people, percentage } = prevState;

        const total = people === 0 ? 0 : payload / people;
        const tip = total * (percentage / 100);

        return {
          ...prevState,
          bill: payload,
          tip: tip.toFixed(2),
          total: total.toFixed(2),
        };
      }
      case UPDATE_PERCENTAGE: {
        const { bill, people } = prevState;

        const total = people === 0 ? 0 : bill / people;
        const tip = total * (payload / 100);

        return {
          ...prevState,
          percentage: payload,
          tip: tip.toFixed(2),
          total: total.toFixed(2),
        };
      }
      case UPDATE_PEOPLE:
        return {
          ...prevState,
          people: payload,
        }
      case RESET:
        return {
          ...initialState,
        }
      default:
        throw new Error('Invalid action type');
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
}

export default StateProvider;