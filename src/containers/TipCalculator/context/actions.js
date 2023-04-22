export const UPDATE_BILL = 'UPDATE_BILL';
export const UPDATE_PERCENTAGE = 'UPDATE_PERCENTAGE';
export const UPDATE_PEOPLE = 'UPDATE_PEOPLE';
export const RESET = 'RESET';

export const updateBill = (bill) => ({
  type: UPDATE_BILL,
  payload: bill,
})

export const updatePercentage = (percentage) => ({
  type: UPDATE_PERCENTAGE,
  payload: percentage,
})

export const updatePeople = (people) => ({
  type: UPDATE_PEOPLE,
  payload: people,
})

export const reset = () => ({
  type: RESET,
})