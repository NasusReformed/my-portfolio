import React from 'react';
import ExperienceItem, { experienceData } from './ExperienceItem';
import Timeline from './Timeline';

const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4">
      <h2 className="text-4xl text-center font-extrabold mb-12 text-white tracking-tight drop-shadow-lg uppercase letter-spacing-wider">
        Work
        <span className="text-blue-600 dark:text-blue-400"> Experience</span>
      </h2>
      <div className="max-w-3xl w-full">
        <Timeline>
          {experienceData.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
