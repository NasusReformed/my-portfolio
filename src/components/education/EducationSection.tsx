import React from 'react';
import EducationItem from './EducationItem';
import { Education, educationData } from '@/data/educationData';

const EducationSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-lg uppercase letter-spacing-wider">
            Education
            <span className="text-blue-600 dark:text-blue-400"> & Training</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and professional certifications that have shaped my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
