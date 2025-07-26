import React from 'react';

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const { role, company, period, description, technologies } = experience;

  return (
    <div className="relative pl-8 sm:pl-12 py-4 group">
      {/* Timeline visual elements */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600 group-last:h-1/2"></div>
      <div className="absolute left-[-9px] top-4 h-5 w-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>

      {/* Content */}
      <div className="mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role}</h3>
        <p className="text-md font-semibold text-blue-600 dark:text-blue-400">{company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-3">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-200">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;