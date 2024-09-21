import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, onClick, type, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  )

}

export default Button