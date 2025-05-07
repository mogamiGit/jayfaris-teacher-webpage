import React from 'react';
import classNames from 'classnames';

interface Props {
  type?: "submit" | "reset" | "button";
  text: string;
  link?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({ type = "button", text, link, icon, className }) => {
  const containerClass = classNames(
    "max-w-[200px] min-h-14 w-auto gap-3 text-white bg-mainColor hover:bg-mainColor/80 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mb-2 rounded",
    className
  );

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <button
      type={type}
      className={containerClass}
      onClick={handleClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;