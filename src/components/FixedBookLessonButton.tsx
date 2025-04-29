import React from 'react';
import { motion } from 'motion/react';
import CalendarIcon from '../../public/images/calendarIcon';

const bookLeasonUrl = "https://calendly.com/nexolabs/consultoria-uno-a-uno";

const FixedBookLessonButton: React.FC = () => {
  return (
    <motion.a
      href={bookLeasonUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex gap-3 px-6 py-3 bg-accentColor hover:bg-white text-white hover:text-accentColor border-2 border-accentColor font-bold rounded shadow-lg transition-colors duration-200 z-50"
      aria-label="Book a lesson"
    >
      <CalendarIcon className="w-5 pb-1" />
      <span>Book a Lesson</span>
    </motion.a>
  );
};

export default FixedBookLessonButton;
