import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const PauseIcon: React.FC<Props> = ({ className }) => {
  const iconClass = classNames(
    'w-auto h-4 stroke-current fill-current',
    className,
  );

  return (
    <svg
      viewBox="0 0 51 51"
      fill="none"
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_67_22)">
        <rect x="0.128906" y="0.982422" width="20.3672" height="49.1729" rx="5" fill="currentColor" />
        <rect x="30.4961" y="0.982422" width="20.3672" height="49.1729" rx="5" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_67_22">
          <rect width="50.7344" height="49.1729" fill="white" transform="translate(0.128906 0.982422)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PauseIcon;