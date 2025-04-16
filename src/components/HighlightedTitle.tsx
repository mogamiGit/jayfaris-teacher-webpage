import React from 'react';
import * as motion from "motion/react-client";

interface Props {
  title: string;
  subtitle: string;
}

const HighlightedTitle: React.FC<Props> = ({ title, subtitle }) => {
  const containerClass = "flex flex-col justify-center items-center gap-1 lg:py-0 md:py-5";

  const titleClass = "text-3xl text-accentColor";

  return (
    <div className={containerClass}>
      <motion.p
        className={titleClass}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        viewport={{ amount: 1, once: true }}
      >
        {title}
      </motion.p>
      <p className='text-sm text-gray-600'>{subtitle}</p>
    </div>
  );
};

export default HighlightedTitle;
