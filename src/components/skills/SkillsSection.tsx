import React from 'react';
import SkillCategory from './SkillCategory';

const skillsData = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind',
      'SCSS',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Java'],
  },
  {
    title: 'Bases de Datos',
    skills: ['SQL', 'MongoDB', 'MySQL', 'Oracle'],
  },
  {
    title: 'Herramientas y Control de Versiones',
    skills: ['Git', 'GitHub', 'Jira', 'AppSheet', 'Google Workspace'],
  },
  {
    title: 'Data Science & Análisis de Datos',
    skills: [
      'Data Analysis with Python',
      'Computer Science With Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        Habilidades Técnicas
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category) => (
          <SkillCategory key={category.title} title={category.title} skills={category.skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
