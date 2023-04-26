import React, { useReducer } from 'react';
import { initialState, store } from './store';
import { RESET, UPDATE_BILL, UPDATE_PEOPLE, UPDATE_PERCENTAGE } from './actions';
import {
  calculateTipAndTotal,
  isValidPayload,
  removeLeadingZero,
  validateBill,
  validatePeople,
  validatePercentage,
} from './helpers';

const { Provider } = store;

function StateProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    const getUpdatedState = (updateFunc) => {
      const { bill, percentage, people } = prevState;
      const updatedValue = removeLeadingZero(payload);

      return {
        ...prevState,
        ...updateFunc(updatedValue, bill, percentage, people),
      };
    }

    switch (type) {
      case UPDATE_BILL: {
        if (!isValidPayload(payload, validateBill)) {
          return { ...prevState };
        }

        return getUpdatedState((bill, _, percentage, people) =>
          calculateTipAndTotal(bill, people, percentage)
        );
      }
      case UPDATE_PERCENTAGE: {
        if (!isValidPayload(payload, validatePercentage)) {
          return { ...prevState };
        }

        return getUpdatedState((percentage, bill, _, people) =>
          calculateTipAndTotal(bill, people, percentage)
        );
      }
      case UPDATE_PEOPLE: {
        if (!isValidPayload(payload, validatePeople)) {
          return { ...prevState };
        }
        const peopleValue = removeLeadingZero(payload);

        return {
          ...prevState,
          people: peopleValue,
          isPeopleError: peopleValue === '0' || peopleValue === '',
          ...calculateTipAndTotal(prevState.bill, peopleValue, prevState.percentage),
        };
      }
      case RESET:
        return {
          ...initialState,
        };
      default:
        throw new Error('Invalid action type');
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
}

export default StateProvider;
