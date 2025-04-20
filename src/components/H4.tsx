import React from 'react';
import * as motion from "motion/react-client";
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const H4: React.FC<Props> = ({ children, ...rest }) => {
  const titleClass = classNames("text-lg text-accentColor", rest.className)

  return (
    <motion.h2
      className={titleClass}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}

export default H4;
