import React from 'react';
import * as motion from "motion/react-client";
import StarIcon from '../../public/images/starIcon';

interface Props {
  text: string;
}

const TitleSection: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex gap-1 text-mainColor text-5xl font-thin pb-5 text-nowrap">
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
