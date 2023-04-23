import React from 'react';
import './Input.css';

function Input({
  className,
  label,
  error,
  errorText,
  id,
  inputMode = 'text',
  placeholder,
  value,
  onChange,
  icon,
}) {
  return (
    <div className={`Input ${className || ''}`}>
      {(error || label) && (
        <div className="Input__header">
          {label && (
            <label className="Input__label" htmlFor={id}>
              {label}
            </label>
          )}
          {error && errorText && <span className="Input__error-text">{errorText}</span>}
        </div>
      )}
      <div className="Input__wrapper">
        <input
          className={`Input__input ${icon ? 'Input__input--with-icon' : ''} ${
            error ? 'Input__input--error' : ''
          }`}
          type="text"
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          inputMode={inputMode}
        />
        {icon && icon}
      </div>
    </div>
  );
}

export default Input;
