import React from 'react';
import EducationItem from './EducationItem';
import { Education, educationData } from '@/data/educationData';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education & Training
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            My academic background and professional certifications that have shaped my technical
            expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((edu: Education, index: number) => (
              <div key={index} className="h-full">
                <EducationItem education={edu} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
