import React from 'react';
import ExperienceItem, { Experience } from './ExperienceItem';

const experienceData: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2022 - Present',
    description: [
      'Led the development of a new e-commerce platform, improving performance by 30%.',
      'Mentored junior developers and conducted code reviews to ensure code quality.',
      'Collaborated with UX/UI designers to implement responsive and user-friendly interfaces.',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS'],
  },
  {
    role: 'Software Engineer',
    company: 'Innovate Co.',
    period: 'Jun 2019 - Dec 2021',
    description: [
      'Developed and maintained features for a SaaS application used by over 10,000 users.',
      'Worked in an Agile team to deliver high-quality software on a bi-weekly sprint cycle.',
      'Wrote unit and integration tests to maintain a high level of code coverage.',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4">
      <h2 className="text-4xl text-center font-extrabold mb-12 text-white tracking-tight drop-shadow-lg uppercase letter-spacing-wider">
        Work
        <span className="text-blue-600 dark:text-blue-400"> Experience</span>
      </h2>
      <div className="max-w-3xl w-full">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
