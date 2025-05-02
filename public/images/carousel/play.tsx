import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const PlayIcon: React.FC<Props> = ({ className }) => {
  const iconClass = classNames(
    'w-auto h-6 stroke-current fill-current',
    className,
  );

  return (
    <svg
      viewBox="0 0 44 69"
      fill="none"
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.165871 62.2136L0.165874 6.92426C0.165874 1.18635 7.0041 -1.79563 11.2088 2.10879L40.98 29.7534C43.7798 32.3533 43.7798 36.7845 40.98 39.3844L11.2088 67.0291C7.0041 70.9332 0.165871 67.9517 0.165871 62.2136Z" fill="currentColor" />
    </svg>
  );
};

export default PlayIcon;