import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="button font-mono font-medium text-xl lg:text-2xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
