import React from 'react';
import useTipCalculatorContext from '../hooks/useTipCalculatorContext';
import { BLOCK_TYPES, RADIOS } from '../consts';
import { Button, Icon, Input, RadioGroup } from '../../../components';
import { reset, updateBill, updatePeople, updatePercentage } from '../context/actions';
import PriceString from '../components/PriceString/PriceString';

function BlockWrapper({ type }) {
  const { bill, people, isPeopleError, percentage, tip, total } = useTipCalculatorContext();

  if (type === BLOCK_TYPES.BILL) {
    return (
      <Input
        label="Bill"
        id="bill"
        inputMode="decimal"
        icon={<Icon name="DollarIcon" width="10" height="16" />}
        placeholder="0"
        value={bill}
        onChange={updateBill}
      />
    );
  }
  if (type === BLOCK_TYPES.PERCENTAGE) {
    return (
      <RadioGroup
        name="percent"
        label="Select Tip %"
        radios={RADIOS}
        value={percentage}
        onChange={updatePercentage}
      />
    );
  }
  if (type === BLOCK_TYPES.PEOPLE) {
    return (
      <Input
        label="Number of People"
        id="people"
        inputMode="numeric"
        icon={<Icon name="PersonIcon" width="13" height="16" />}
        placeholder="0"
        value={people}
        error={isPeopleError}
        errorText="Can't be zero"
        onChange={updatePeople}
      />
    );
  }
  if (type === BLOCK_TYPES.TIP) return <PriceString price={tip} title="Tip Amount" />;
  if (type === BLOCK_TYPES.TOTAL) return <PriceString price={total} title="Total" />;
  if (type === BLOCK_TYPES.RESET) {
    return (
      <Button
        text='RESET'
        onClick={reset}
        isDisabled={bill === '' && tip === '' && people === ''}
      />
    );
  }
  return null;
}

export default BlockWrapper;
