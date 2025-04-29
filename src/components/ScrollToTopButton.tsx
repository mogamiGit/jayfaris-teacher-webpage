import React, { useState, useEffect } from 'react';
import * as motion from "motion/react-client";

const ScrollToTopButton: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.pageYOffset > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolled ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
      style={{ pointerEvents: isScrolled ? 'auto' : 'none' }}
      className="bg-transparent border-none cursor-pointer text-mainColor"
      aria-label="Scroll to top"
      whileHover={{ scale: 0.9 }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM36.6582 39H41.25L32.7092 19.5H27.3367L18.75 39H23.3418L29.8622 24.0485H30.2296L36.6582 39Z"
          fill="currentColor"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollToTopButton;