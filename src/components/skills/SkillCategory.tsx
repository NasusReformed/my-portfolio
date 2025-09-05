import React from 'react';
import SkillBadge from './SkillBadge';
import { Skill } from '@/data/skills';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  columns?: number | 'auto';
  className?: string;
  badgeSize?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  columns = 'auto',
  className = '',
  badgeSize = 'md',
  showLabels = true,
}) => {
  // Calculate grid columns based on the number of items
  const getGridCols = (count: number) => {
    if (columns !== 'auto') return columns;
    
    // Auto-calculate columns based on number of items
    if (count <= 3) return 2; 
    if (count <= 6) return 3; 
    return 4;
  };

  const gridCols = columns === 'auto' 
    ? getGridCols(skills.length)
    : columns;

  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
  }[gridCols] || 'grid-cols-2 sm:grid-cols-3';

  // Calculate the maximum width based on the number of columns
  const maxWidth = {
    1: 'max-w-2xl',
    2: 'max-w-4xl',
    3: 'max-w-5xl',
    4: 'max-w-6xl',
    5: 'max-w-7xl',
    6: 'max-w-7xl',
  }[gridCols] || 'max-w-7xl';

  return (
    <div className={`w-full ${className}`}>
      <div className={`mx-auto ${maxWidth} px-70`}>
        <div className={`grid ${gridClass} gap-1 sm:gap-4`}>
          {skills.map((skill) => (
            <div key={skill.name} className="flex justify-center">
              <SkillBadge 
                skill={skill} 
                size={badgeSize}
                showLabel={showLabels}
                className="m-0.5"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;
