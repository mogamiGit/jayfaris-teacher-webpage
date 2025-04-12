import React from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import FixedBookLessonButton from './FixedBookLessonButton';

const FixedActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-row items-end gap-4">
      <ScrollToTopButton />
      <FixedBookLessonButton />
    </div>
  );
};

export default FixedActionButtons;
