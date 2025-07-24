import React from 'react';
import SkillCategory from './SkillCategory';
import { KnownSkill } from './SkillBadge';

const skillsData: { title: string; skills: readonly KnownSkill[] }[] = [
  {
    title: 'Frontend',
    skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'SCSS'] as const,
  },
  {
    title: 'Frameworks',
    skills: ['React', 'React Native', 'Next.js'] as const,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Java'] as const,
  },
  {
    title: 'Bases de Datos',
    skills: ['SQL', 'MongoDB', 'MySQL', 'Oracle'] as const,
  },
  {
    title: 'Herramientas y Control de Versiones',
    skills: ['Git', 'GitHub', 'Jira', 'AppSheet', 'Google Workspace'] as const,
  },
  {
    title: 'Data Science & Análisis de Datos',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'] as const,
  },
].sort((a, b) => a.title.localeCompare(b.title));

const SkillsSection: React.FC = () => (
  <section className="py-12 px-4">
    <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
      Skills
      <span className="text-blue-600 dark:text-blue-400"> & Technologies</span>
    </h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillsData.map((category) => (
        <SkillCategory key={category.title} title={category.title} skills={[...category.skills]} />
      ))}
    </div>
  </section>
);

export default SkillsSection;
