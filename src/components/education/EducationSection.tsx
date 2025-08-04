import React from 'react';
import EducationItem, { educationData } from './EducationItem';

const EducationSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
          {educationData.map((edu, index) => (
            <div key={index} className="h-full">
              <EducationItem education={edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
