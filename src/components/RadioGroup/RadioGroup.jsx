import React, { useState } from 'react';
import Input from '../Input/Input';
import './RadioGroup.css';

function RadioGroup({ className, label, name, radios, value, onChange }) {
  const [isCustom, setIsCustom] = useState(false);
  const handleChangeRadio = (event) => {
    setIsCustom(false);
    onChange(event.target.value);
  };

  const handleChangeCustom = (event) => {
    setIsCustom(true);
    onChange(event.target.value);
  };

  return (
    <div className={`RadioGroup ${className || ''}`}>
      {label && <div className="RadioGroup__label">{label}</div>}
      <div className="RadioGroup__radios">
        {radios.map(({ value: radioValue, label: radioLabel }, index) => (
          <label htmlFor={`${name}-${index}`} className="RadioGroup__radio" key={radioValue}>
            <input
              className="RadioGroup__input"
              type="radio"
              name={name}
              id={`${name}-${index}`}
              value={radioValue}
              onChange={handleChangeRadio}
              checked={value === radioValue && !isCustom}
            />
            <span className="RadioGroup__radio-button">{radioLabel}</span>
          </label>
        ))}
        <Input
          id={`${name}-custom`}
          placeholder="Custom"
          inputMode="numeric"
          value={isCustom ? value : ''}
          onChange={handleChangeCustom}
        />
      </div>
    </div>
  );
}

export default RadioGroup;
