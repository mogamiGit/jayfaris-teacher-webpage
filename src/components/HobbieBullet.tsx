import React from 'react';
import * as motion from "motion/react-client";

interface Props {
  title: string;
  description: string;
  urlImage: string;
  altImage: string;
}

const HobbieBullet: React.FC<Props> = ({ title, description, ...rest }) => {

  return (
    <div className="flex flex-col gap-2 items-center sm:items-start">
      <img src={rest.urlImage} alt={rest.altImage} className='max-w-[160px]' />
      <p className="font-bold text-xl">{title}</p>
      <p className='leading-[1.6] text-sm text-center sm:text-left'>{description}</p>
    </div>
  );
};

export default HobbieBullet;
