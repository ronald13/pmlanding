import React from 'react';
import './Badge.scss';

const Badge = ({ text, variant = 'default' }) => {
  const className = variant === 'tool' ? 'badge badge--tool' : 'badge';

  return (
    <span className={className}>
      {text}
    </span>
  );
};

export default Badge;