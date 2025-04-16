import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const StarIcon: React.FC<Props> = ({ className }) => {
  const iconClass = classNames(
    'w-6 h-auto stroke-current fill-current',
    className,
  );

  return (
    <svg
      viewBox="0 0 5 6"
      // Se elimina fill="none" para que se apliquen los estilos de color
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1282_10)">
        <path d="M2.38286 0.759432L2.91079 2.38423H4.6192L3.23707 3.38841L3.76499 5.0132L2.38286 4.00902L1.00073 5.0132L1.52865 3.38841L0.14652 2.38423H1.85493L2.38286 0.759432Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1282_10">
          <rect width="4.47268" height="4.25377" transform="translate(0.14652 0.759432)" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarIcon;