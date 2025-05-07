import { useRef, useState, useEffect } from 'react';
import MapPinCard from './MapPinCard';
import { mapPinCards } from '../data/mapPinCards';
import RewIcon from '../../public/images/carousel/rew';
import PlayIcon from '../../public/images/carousel/play';
import PauseIcon from '../../public/images/carousel/pause';

const HorizontalMapPinCarousel = () => {
  const containerRef = useRef(null);
  const autoScrollInterval = 3000;
  const defaultScrollAmountAuto = 300;
  const mobileScrollAmountAuto = 280;
  const scrollAmountManual = 50;
  const scrollIntervalDelayManual = 50;
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollLeftIntervalId, setScrollLeftIntervalId] = useState(null);
  const isCarousel = mapPinCards.length > 3;
  const [scrollAmountAutoCurrent, setScrollAmountAutoCurrent] = useState(defaultScrollAmountAuto);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollAmountAutoCurrent(mobileScrollAmountAuto);
      } else {
        setScrollAmountAutoCurrent(defaultScrollAmountAuto);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [mobileScrollAmountAuto, defaultScrollAmountAuto]);

  const scrollRightAuto = () => {
    if (containerRef.current && isCarousel) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmountAutoCurrent,
        behavior: 'smooth',
      });
    }
  };

  const scrollStepLeftManual = () => {
    if (containerRef.current && isCarousel) {
      containerRef.current.scrollLeft -= scrollAmountManual;
    }
  };

  const startScrollLeftManual = () => {
    if (isCarousel) {
      setIsPlaying(false);
      const intervalId = setInterval(scrollStepLeftManual, scrollIntervalDelayManual);
      setScrollLeftIntervalId(intervalId);
    }
  };

  const stopScrollLeftManual = () => {
    if (scrollLeftIntervalId && isCarousel) {
      clearInterval(scrollLeftIntervalId);
      setScrollLeftIntervalId(null);
    }
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying && containerRef.current && isCarousel) {
      intervalId = setInterval(() => {
        const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;
        if (containerRef.current.scrollLeft < maxScrollLeft) {
          scrollRightAuto();
        } else {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, autoScrollInterval);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying, isCarousel, scrollAmountAutoCurrent]);

  const togglePlay = () => {
    if (isCarousel) {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`overflow-x-hidden ${isCarousel ? 'snap-x snap-mandatory' : ''} px-4`}
      >
        <div className={`flex gap-10 sm:gap-20 ${isCarousel ? 'min-w-max' : ''} py-8 relative`}>
          {mapPinCards.map((card, index) => (
            <MapPinCard
              key={index}
              title={card.title}
              description={card.description}
              date={card.date}
              rotate={card.rotate}
              delay={card.delay}
            />
          ))}
          {isCarousel && (
            <svg
              viewBox="0 0 1502 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[31px] -z-10 pointer-events-none"
              preserveAspectRatio="none"
            >
              <path
                d="M1501.2 12.6831L1487.95 14.3439C1460.31 17.9411 1403.22 25.1354 1346.55 27.541C1290.21 29.8567 1233.12 27.6085 1176.45 20.3467C1161.33 18.4334 1146.15 16.1589 1130.94 13.8797C1089.49 7.66875 1047.81 1.42338 1006.35 2.36085C973.76 3.0501 940.919 8.15487 908.055 13.2632C884.103 16.9862 860.14 20.711 836.252 22.7298C779.906 27.6085 722.816 22.6623 666.152 16.7494C661.354 16.2383 656.551 15.7186 651.743 15.1984C600.087 9.60846 547.891 3.96009 496.051 8.34108C473.697 10.2766 451.227 14.0627 428.712 17.8562C394.474 23.6249 360.135 29.4108 325.951 28.7326C294.723 28.1096 263.267 21.893 231.781 15.6707C206.455 10.6657 181.111 5.65706 155.85 3.55238C99.5047 -1.16891 42.4148 8.27368 14.1356 13.1524L1.20166 15.3343"
                stroke="#C5C5C5"
                strokeWidth="4"
                strokeDasharray="20 10"
              />
            </svg>
          )}
        </div>
      </div>
      {isCarousel && (
        <div className="flex gap-3">
          <button
            onMouseDown={startScrollLeftManual}
            onMouseUp={stopScrollLeftManual}
            onMouseLeave={stopScrollLeftManual}
            onTouchStart={startScrollLeftManual}
            onTouchEnd={stopScrollLeftManual}
            onTouchCancel={stopScrollLeftManual}
            className="min-w-16 h-16 px-4 flex justify-center items-center bg-white text-gray-800 rounded-xl border-2 border-gray-300"
          >
            <RewIcon />
          </button>
          <button onClick={togglePlay} className=" min-w-16 h-16 px-4 flex justify-center items-center bg-white text-gray-800 rounded-xl border-2 border-gray-300">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      )}
    </div>
  );
};

export default HorizontalMapPinCarousel;