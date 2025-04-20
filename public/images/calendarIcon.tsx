import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const CalendarIcon: React.FC<Props> = ({ className }) => {
  const iconClass = classNames(
    'h-auto stroke-current',
    className,
  );

  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_45_15)">
        <path d="M1.5 2C1.23478 2 0.98043 2.10536 0.792893 2.29289C0.605357 2.48043 0.5 2.73478 0.5 3V12.5C0.5 12.7652 0.605357 13.0196 0.792893 13.2071C0.98043 13.3946 1.23478 13.5 1.5 13.5H12.5C12.7652 13.5 13.0196 13.3946 13.2071 13.2071C13.3946 13.0196 13.5 12.7652 13.5 12.5V3C13.5 2.73478 13.3946 2.48043 13.2071 2.29289C13.0196 2.10536 12.7652 2 12.5 2H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.5 0.5V3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 0.5V3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.5 2H8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.5 8H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 5.5V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_45_15">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarIcon;