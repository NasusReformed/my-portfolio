import React from 'react';
import SkillBadge from './SkillBadge';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
