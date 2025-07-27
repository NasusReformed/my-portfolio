import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
      {children}
    </div>
  );
};

export default Timeline;
