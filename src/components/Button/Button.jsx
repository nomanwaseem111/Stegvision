import React from 'react';

const Button = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} bg-cyan cursor-pointer text-[#0E1319]`}
    >
      {children}
    </button>
  );
};

export default Button;
