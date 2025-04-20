import React from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import FixedBookLessonButton from './FixedBookLessonButton';

const FixedActionButtons: React.FC = () => {
  return (
    <div className="w-full fixed bottom-0 right-0 z-50 flex flex-row justify-between items-center gap-6 p-6">
      <ScrollToTopButton />
      <FixedBookLessonButton />
    </div>
  );
};

export default FixedActionButtons;
