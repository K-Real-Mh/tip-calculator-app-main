import React from 'react';
import getIconByName from '../../helpers/getIconByName';

function Icon({ className, width = '11', height = '17', name, color = 'var(--icon-cyan)' }) {
  const IconComponent = getIconByName(name);
  

  if (!IconComponent) {
    return null;
  }

  return (
    <svg
      className={className || ''}
      width={width}
      height={height}
      aria-hidden
    >
      <IconComponent color={color} />
    </svg>
  )
}

export default Icon;