import React from "react";
import classNames from "classnames";

interface Props {
  title: string;
  description: string;
  date: string;
  rotate: string;
}

const MapPinCard: React.FC<Props> = ({ title, description, date, rotate }) => {
  const containerClass = classNames(
    "relative bg-white rounded-xl p-2 pt-10 w-[250px] flex-shrink-0 transform shadow-lg",
    rotate
  );

  return (
    <div className={containerClass}>
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
    </div>
  );
}

export default MapPinCard;
