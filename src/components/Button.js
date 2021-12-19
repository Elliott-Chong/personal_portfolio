import React from "react";

const Button = ({ children, onClick, id, className }) => {
  return (
    <button
      id={id}
      className={`button font-mono font-medium text-xl lg:text-2xl ${
        className && className
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
