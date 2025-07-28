import React from 'react';
import EducationItem, { educationData } from './EducationItem';
import Timeline from '../experience/Timeline'; 

const EducationSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4">
      <h2 className="text-4xl text-center font-extrabold mb-12 text-gray-900 dark:text-white tracking-tight drop-shadow-lg uppercase letter-spacing-wider">
        Education
        <span className="text-blue-600 dark:text-blue-400"> & Training</span>
      </h2>
      <div className="max-w-3xl w-full">
        <Timeline>
          {educationData.map((edu, index) => (
            <EducationItem key={index} education={edu} />
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default EducationSection;
