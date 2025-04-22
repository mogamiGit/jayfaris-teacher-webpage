import React from 'react';
import * as motion from "motion/react-client";
import StarIcon from '../../public/images/starIcon';
import classNames from 'classnames';

interface Props {
  text: string;
  className?: string;
}

const TitleSection: React.FC<Props> = ({ text, className }) => {
  const containerClass = classNames("flex gap-1 text-mainColor text-5xl font-thin pb-5 text-nowrap", className)

  return (
    <div className={containerClass}>
      <p>
        {text}
      </p>
      <motion.div
        className='w-3 text-accentColor'
        animate={{ y: [0, -10, 0], fontWeight: [300, 500, 300] }}
        transition={{
          type: "tween",
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <StarIcon />
      </motion.div>
    </div>
  );
}

export default TitleSection;
