import React from 'react';

export interface Education {
  title: string;
  institution: string;
  period: string;
}

export const educationData: Education[] = [
  {
    title: 'Ingeniería en Informática',
    institution: 'INACAP Apoquindo',
    period: '2020 - 2024',
  },
  {
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    period: 'Feb 13, 2025 ',
  },
  {
    title: 'Scientific Computing with Python',
    institution: 'freeCodeCamp',
    period: 'Apr 13, 2025',
  },
  {
    title: 'Next.js App Router Fundamentals',
    institution: 'Vercel',
    period: 'Jul 5, 2025',
  },
];

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const { title, institution, period } = education;

  return (
    <div className="relative pl-8 sm:pl-12 py-4">
      <div className="absolute left-[-9px] top-4 h-5 w-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
      <div className="mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-md font-semibold text-blue-600 dark:text-blue-400">{institution}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{period}</p>
      </div>
    </div>
  );
};

export default EducationItem;
