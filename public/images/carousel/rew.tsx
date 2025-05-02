import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const RewIcon: React.FC<Props> = ({ className }) => {
  const iconClass = classNames(
    'w-auto h-4 stroke-current fill-current',
    className,
  );

  return (
    <svg
      viewBox="0 0 103 74"
      fill="none"
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M47.3357 11.9027L47.3357 62.0975C47.3357 67.3067 41.1276 70.0139 37.3103 66.4692L10.2824 41.3719C7.74052 39.0116 7.74052 34.9887 10.2824 32.6284L37.3103 7.53091C41.1276 3.98656 47.3357 6.69329 47.3357 11.9027Z" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M94.366 11.9027L94.366 62.0975C94.366 67.3067 88.1578 70.0139 84.3405 66.4692L57.3126 41.3719C54.7708 39.0116 54.7708 34.9887 57.3126 32.6284L84.3405 7.53091C88.1578 3.98656 94.366 6.69329 94.366 11.9027Z" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

export default RewIcon;