import React from 'react';
import SkillCategory from './SkillCategory';
import { SkillCategory as SkillCategoryType } from '@/data/skills';

interface SkillsSectionProps {
  /**
   * Array of skill categories to display
   */
  categories: SkillCategoryType[];
  /**
   * Optional: Size of the skill badges ('sm', 'md', or 'lg')
   */
  badgeSize?: 'sm' | 'md' | 'lg';
  /**
   * Optional: Whether to show labels under each skill badge
   */
  showLabels?: boolean;
  /**
   * Optional: Section title
   */
  title?: string;
  /**
   * Optional: Section subtitle
   */
  subtitle?: string;
  /**
   * Optional: Additional CSS classes to apply to the section
   */
  className?: string;
}

/**
 * A component that renders a collection of skill categories
 * This is a presentational component that delegates rendering to SkillCategory
 */
const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  badgeSize = 'md',
  showLabels = true,
  title = 'Skills & Technologies',
  subtitle = 'Technologies and tools I work with on a regular basis',
  className = '',
}) => {
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
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title} className="mb-8 last:mb-0">
              <SkillCategory
                title={category.title}
                skills={category.skills}
                badgeSize={badgeSize}
                showLabels={showLabels}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
