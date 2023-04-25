import React from 'react';
import './Button.css';

function Button({ className, text, isDisabled, onClick }) {
  return (
    <button
      type="button"
      className={`Button ${className || ''}${isDisabled ? 'Button--disabled': ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default Button;
