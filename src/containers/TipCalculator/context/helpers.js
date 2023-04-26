export const validateBill = inputString => /^(\d+(\.\d{0,2})?)?$/.test(inputString);

export const validatePercentage = inputString => /^(100|\d\d?|0)?$/.test(inputString);

export const validatePeople = inputString => /^\d*?$/.test(inputString);

export const removeLeadingZero = numStr => numStr.length > 1 && numStr[0] === '0' ? numStr.slice(1) : numStr;

export const calculateTipAndTotal = (bill, people, percentage) => {
  const total = people === '0' || people === '' ? 0 : parseFloat(bill || '0') / +people;
  const tip = total * (+percentage / 100);

  return {
    bill,
    people,
    percentage,
    tip: tip.toFixed(2),
    total: total.toFixed(2),
  };
}

export const isValidPayload = (payload, validator) => validator(payload)
