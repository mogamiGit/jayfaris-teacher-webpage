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
    <div className="flex flex-col gap-2">
      <img src={rest.urlImage} alt={rest.altImage} className='max-w-[160px]' />
      <p className="font-bold text-lg">{title}</p>
      <p className='leading-[1.5] text-sm'>{description}</p>
    </div>
  );
};

export default HobbieBullet;
