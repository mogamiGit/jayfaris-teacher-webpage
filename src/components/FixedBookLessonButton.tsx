import React from 'react';
import { motion } from 'framer-motion';

const bookLeasonUrl = "https://calendly.com/nexolabs/consultoria-uno-a-uno";

const FixedBookLessonButton: React.FC = () => {
  return (
    <motion.a
      href={bookLeasonUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }} // Simple entrance animation
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }} // Slight delay after page load
      className="inline-block px-6 py-3 bg-accentColor text-gray-900 font-bold rounded-md shadow-md hover:bg-yellow-500 transition-colors duration-200 z-50"
      aria-label="Book a lesson"
    >
      Book a Lesson
    </motion.a>
  );
};

export default FixedBookLessonButton;
