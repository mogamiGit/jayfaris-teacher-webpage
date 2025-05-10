import React from 'react';
import classNames from 'classnames';

interface Props {
  type?: "submit" | "reset" | "button";
  text: string;
  link?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({ type = "button", text, link, icon, disabled = false, className }) => {
  const containerClass = classNames(
    "max-w-[200px] min-h-14 w-auto gap-3 font-medium text-base px-5 py-2.5 text-center inline-flex items-center justify-center mb-2 rounded focus:outline-none",
    disabled
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-mainColor text-white hover:bg-mainColor/80 focus:ring-2 focus:ring-[#24292F]/50",
    className
  );

  const handleClick = () => {
    if (disabled) return;
    if (link) window.location.href = link;
  };

  return (
    <button
      type={type}
      className={containerClass}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;