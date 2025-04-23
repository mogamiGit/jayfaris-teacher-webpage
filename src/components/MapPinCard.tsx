import React from "react";
import classNames from "classnames";
import * as motion from "motion/react-client";

const postVariants = {
  //Scale
  base: { scale: 0.9 },
  scaled: { scale: 1, transition: { type: "linear", stiffness: 200 } },
  // Rotate
  viewed: ({ r, d }: { r: number; d: number }) => ({
    rotate: r,
    transition: { delay: d, ease: "easeOut", duration: 0.3 },
  }),
}

interface Props {
  title: string;
  description: string;
  date: string;
  rotate?: number;
  delay?: number;
}

const MapPinCard: React.FC<Props> = ({ title, description, date, rotate = 0, delay = 0.3 }) => {
  const containerClass = classNames(
    "bg-white rounded-xl p-2 pt-10 w-[250px] flex-shrink-0 transform shadow-lg"
  );

  return (
    <div className="relative">
      <motion.div
        className={containerClass}
        variants={postVariants}
        custom={{ r: rotate, d: delay }}
        initial="base"
        animate="scaled"
        whileInView="viewed"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <img
          src="/public/images/tagIcon.svg"
          className="w-14 absolute -top-4 right-1/2 translate-x-10 z-10"
          alt="tag icon"
        />
        <div className="bg-opacityAccentColor p-4 flex flex-col justify-center gap-4 rounded-lg h-[200px]">
          <p className="text-xl text-mainColor font-bold line-clamp-2">{title}</p>
          <p className="text-sm line-clamp-3">{description}</p>
          <p className="text-sm text-accentColor font-semibold line-clamp-1">{date}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default MapPinCard;
