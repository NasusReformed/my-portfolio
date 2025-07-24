import * as React from 'react';

export type KnownSkill = keyof typeof skillIcons;

interface SkillBadgeProps {
  skill: KnownSkill;
}

//Reutilicable icons for skills
const ReactIcon = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#61DAFB">
    <circle cx={16} cy={16} r={2.5} />
    <g stroke="#61DAFB" strokeWidth={2} fill="none">
      <ellipse rx={10} ry={4.5} cx={16} cy={16} />
      <ellipse rx={10} ry={4.5} cx={16} cy={16} transform="rotate(60 16 16" />
      <ellipse rx={10} ry={4.5} cx={16} cy={16} transform="rotate(120 16 16)" />
    </g>
  </svg>
);

const DefaultIcon = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md bg-gray-200 drak:bg-gray-700 text-xs font-bold">
    ?
  </div>
);

const skillIcons = {
  React: <ReactIcon />,
  'React Native': <ReactIcon />,
  'Next.js': (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="none">
      <circle cx={16} cy={16} r={16} fill="#fff" />
      <path d="M7 16a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" stroke="#000" strokeWidth={2} />
      <path d="M13 13l6 6" stroke="#000" strokeWidth={2} />
    </svg>
  ),
  TypeScript: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#3178C6">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  JavaScript: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#F7DF1E">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  HTML: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#E34F26">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  CSS: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#1572B6">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Tailwind: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="none">
      <path d="M8 20c2-4 4-6 8-6s6 2 8 6" stroke="#38BDF8" strokeWidth={2} />
      <path d="M8 16c2-4 4-6 8-6s6 2 8 6" stroke="#38BDF8" strokeWidth={2} />
    </svg>
  ),
  SCSS: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#CD6799">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  'Node.js': (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#339933">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Python: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#3776AB">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Java: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#007396">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  SQL: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#003B57">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  MongoDB: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#47A248">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  MySQL: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#4479A1">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Oracle: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#F80000">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Git: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#F05032">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  GitHub: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#181717">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Jira: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#0052CC">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  AppSheet: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#0C7CD5">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  'Google Workspace': (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#4285F4">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  NumPy: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#013243">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Pandas: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#150458">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Matplotlib: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#11557C">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
  Seaborn: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 32 32" fill="#43B7BA">
      <rect width={32} height={32} rx={6} />
    </svg>
  ),
};

//Final component for SkillBadge
const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <figure className="flex flex-col items-center m-2" aria-label={`Skill: ${skill}`}>
    {skillIcons[skill] ?? <DefaultIcon />}
    <figcaption className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
      {skill}
    </figcaption>
  </figure>
);

export default SkillBadge;
