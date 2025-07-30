import * as React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiGit,
  SiGithub,
  SiJira,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiGoogle,
  SiPostman,
  SiBitbucket,
  SiGitlab,
} from 'react-icons/si';
import { DiJava} from 'react-icons/di';

// Unification of types
export type KnownSkill = keyof typeof skillIcons;

interface SkillBadgeProps {
  skill: KnownSkill;
}

// Icons + colors (all neutral gray)
const skillIcons = {
  React: SiReact,
  'React Native': SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  Tailwind: SiTailwindcss,
  SCSS: SiSass,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  Java: DiJava,
  SQL: SiMysql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Oracle: SiOracle,
  Git: SiGit,
  GitHub: SiGithub,
  Jira: SiJira,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: SiPlotly,
  Seaborn: SiPython,
  'Google Workspace': SiGoogle,
  AppSheet: SiGoogle,
  Postman: SiPostman,
  Gemini: SiGoogle,
  Bitbucket: SiBitbucket,
  Gitlab: SiGitlab,
} as const;

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const Icon = skillIcons[skill];
  return (
    <figure className="flex flex-col items-center m-2" aria-label={`Skill: ${skill}`}>
      <Icon className="w-10 h-10 md:w-12 md:h-12" />
      <figcaption className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
        {skill}
      </figcaption>
    </figure>
  );
};

export default SkillBadge;
