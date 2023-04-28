import React from 'react';
import useTipCalculatorContext from '../hooks/useTipCalculatorContext';
import { BLOCK_TYPES, RADIOS } from '../consts';
import { Button, Icon, Input, RadioGroup } from '../../../components';
import { reset, updateBill, updatePeople, updatePercentage } from '../context/actions';
import PriceString from '../components/PriceString/PriceString';

function BlockWrapper({ className, type }) {
  const { bill, people, isPeopleError, percentage, tip, total, dispatch } = useTipCalculatorContext();

  if (type === BLOCK_TYPES.BILL) {
    return (
      <Input
        className={className}
        label="Bill"
        id="bill"
        inputMode="decimal"
        icon={<Icon name="DollarIcon" width="10" height="16" />}
        placeholder="0"
        value={bill}
        onChange={(value) => dispatch(updateBill(value))}
      />
    );
  }
  if (type === BLOCK_TYPES.PERCENTAGE) {
    return (
      <RadioGroup
        className={className}
        name="percent"
        label="Select Tip %"
        radios={RADIOS}
        value={percentage}
        onChange={(value) => dispatch(updatePercentage(value))}
      />
    );
  }
  if (type === BLOCK_TYPES.PEOPLE) {
    return (
      <Input
        className={className}
        label="Number of People"
        id="people"
        inputMode="numeric"
        icon={<Icon name="PersonIcon" width="13" height="16" />}
        placeholder="0"
        value={people}
        error={isPeopleError}
        errorText="Can't be zero"
        onChange={(value) => dispatch(updatePeople(value))}
      />
    );
  }
  if (type === BLOCK_TYPES.TIP) return <PriceString className={className} price={tip} title="Tip Amount" />;
  if (type === BLOCK_TYPES.TOTAL) return <PriceString className={className} price={total} title="Total" />;
  if (type === BLOCK_TYPES.RESET) {
    return (
      <Button
        className={className}
        text='RESET'
        onClick={() => dispatch(reset())}
        isDisabled={bill === '' && tip === '' && people === ''}
      />
    );
  }
  return null;
}

export default BlockWrapper;
