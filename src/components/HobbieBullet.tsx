import React from 'react';
import * as motion from "motion/react-client";
import { useRive } from '@rive-app/react-canvas';

interface Props {
  title: string;
  description: string;
  urlImage: string;
  altImage: string;
  withRive?: boolean;
}

const HobbieBullet: React.FC<Props> = ({ title, description, withRive = false, ...rest }) => {
  const { RiveComponent } = useRive({
    src: rest.urlImage,
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  return (
    <div className="max-w-[18rem] flex flex-col gap-2 items-center sm:items-start">
      <div className="w-40 h-40">
        {withRive ? (
          <RiveComponent />
        ) : (
          <img src={rest.urlImage} alt={rest.altImage} className='w-40' />
        )}
      </div>
      <p className="font-bold text-xl">{title}</p>
      <p className='leading-[1.6] text-sm text-center sm:text-left'>{description}</p>
    </div>
  );
};

export default HobbieBullet;
