import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 shadow">
      {skill}
    </span>
  );
};

export default SkillBadge;
