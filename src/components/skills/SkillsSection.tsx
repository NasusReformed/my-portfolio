import React from 'react';
import SkillCategory from './SkillCategory';
import { SkillCategory as SkillCategoryType } from '@/data/skills';

interface SkillsSectionProps {
  categories: SkillCategoryType[];
  badgeSize?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  badgeSize = 'md',
  showLabels = true,
  title = 'Skills & Technologies',
  subtitle = 'Technologies and tools I work with on a regular basis',
  className = '',
}) => {
  // Flatten all skills from all categories into a single array
  const allSkills = React.useMemo(() => {
    return categories.flatMap((category) => category.skills);
  }, [categories]);

  if (categories.length === 0) {
    return null;
  }

  return (
    <section id="skills" className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <SkillCategory
          title=""
          skills={allSkills}
          badgeSize={badgeSize}
          showLabels={showLabels}
          columns={6}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
