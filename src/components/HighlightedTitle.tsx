import React from 'react';
import * as motion from "motion/react-client";
import classNames from 'classnames';

interface Props {
  title: string;
  subtitle: string;
  className?:string;
}

const HighlightedTitle: React.FC<Props> = ({ title, subtitle, className }) => {
  const containerClass = "flex flex-col justify-center items-center lg:py-0 md:py-5 gap-1";

  const titleClass = classNames("font-main text-5xl sm:text-6xl text-accentColor", className);

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
      <p className='text-xl text-gray-600'>{subtitle}</p>
    </div>
  );
};

export default HighlightedTitle;
