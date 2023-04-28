import React from 'react';
import './PriceString.css';

function PriceString({className, title, price}) {
  return (
  <div className={`PriceString ${className || ''}`}>
    <div className='PriceString__info'>
      <div className='PriceString__title'>{title}</div>
      <div className='PriceString__subtitle'>/ person</div>
    </div>
    <div className='PriceString__price'>${price}</div>
  </div>
)}

export default PriceString;