import React from 'react';
import EducationItem from './EducationItem';
import { Education, educationData } from '@/data/educationData';

const EducationSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-lg uppercase">
            Education
            <span className="text-blue-600 dark:text-blue-400"> & Training</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and professional certifications that have shaped my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 px-2">
          {educationData.map((edu: Education, index: number) => (
            <div key={index} className="h-full">
              <EducationItem education={edu} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
