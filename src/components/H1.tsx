import React from 'react';
import classNames from "classnames";
import * as motion from "motion/react-client";

interface Props {
  text: string;
  className?: string;
}

const H1: React.FC<Props> = ({ text, className }) => {
  const titleClass = classNames("font-main text-7xl md:text-8xl text-wrap break-normal md:break-words", className)

  return (
    <motion.h1
      className={titleClass}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.5 }}
      style={{ lineHeight: 0.9 }}
    >
      {text}
    </motion.h1>
  );
}

export default H1;
