'use client';

import * as React from 'react';
import Image from 'next/image';
import { Skill } from '@/data/skills';

interface SkillBadgeProps {
  /** The skill data to display */
  skill: Skill;
  /** Size of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show the label under the icon */
  showLabel?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Whether the badge is interactive */
  interactive?: boolean;
  /** Additional styles for the icon container */
  iconStyle?: React.CSSProperties;
}

// Size configurations for different badge sizes
const sizeConfig = {
  sm: {
    container: 'w-8 h-8',
    text: 'text-xs',
    icon: 24,
  },
  md: {
    container: 'w-10 h-10',
    text: 'text-sm',
    icon: 32,
  },
  lg: {
    container: 'w-12 h-12',
    text: 'text-base',
    icon: 40,
  },
} as const;

const getImagePath = (skillName: string): string => {
  // Map skill names to their corresponding image filenames
  const imageMap: Record<string, string> = {
    'TypeScript': 'typescript.svg',
    'JavaScript': 'javascript-1.svg',
    'HTML': 'html-1.svg',
    'CSS': 'css-3.svg',
    'Tailwind': 'tailwind-css-2.svg',
    'SCSS': 'sass-1.svg',
    'Sass': 'sass-1.svg',
    'React': 'react-2.svg',
    'React Native': 'react-native-1.svg',
    'Next.js': 'next-js.svg',
    'Node.js': 'nodejs-icon.svg',
    'Python': 'python-5.svg',
    'Java': 'java.svg',
    'Django': 'django.svg',
    'Flask': 'flask.svg',
    'FastAPI': 'fastapi-1.svg',
    'SQL': 'mysql-logo-pure.svg',
    'MongoDB': 'mongodb-icon-1.svg',
    'MySQL': 'mysql-logo-pure.svg',
    'PostgreSQL': 'postgresql.svg',
    'Oracle': 'oracle-corporation-logo.svg',
    'Docker': 'docker-4.svg',
    'Kubernetes': 'kubernetes.svg',
    'AWS': 'aws-2.svg',
    'Azure': 'azure-2.svg',
  };

  const iconName = imageMap[skillName] || 'default-icon.svg';
  return `/images/skills/${iconName}`;
};

/**
 * A component that displays a skill badge with an icon and optional label
 * Uses local SVG images from the public/images/skills directory
 */
const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  size = 'md',
  showLabel = true,
  className = '',
  onClick,
  interactive = true,
  iconStyle = {},
}) => {
  const [iconError, setIconError] = React.useState<boolean>(false);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Get the icon path for the skill
  const iconPath = getImagePath(skill.name);
  const config = sizeConfig[size];

  // Handle click events
  const handleClick = (e: React.MouseEvent) => {
    if (!interactive) return;
    
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (skill.url) {
      window.open(skill.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!interactive) return;
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick();
      } else if (skill.url) {
        window.open(skill.url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  // Skip rendering on server to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div 
      className={`group flex flex-col items-center ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={interactive ? 'button' : 'figure'}
      tabIndex={interactive ? 0 : -1}
      aria-label={interactive ? `Learn more about ${skill.name}` : skill.name}
      style={{
        cursor: interactive ? 'pointer' : 'default',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
        transform: isHovered && interactive ? 'translateY(-2px)' : 'none',
        opacity: isHovered && interactive ? 0.9 : 1,
      }}
    >
      <div 
        className={`relative flex items-center justify-center ${config.container} rounded-lg bg-white dark:bg-gray-800 p-2 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 group-hover:shadow-md`}
        style={{
          ...iconStyle,
          transform: isHovered && interactive ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {!iconError ? (
            <Image
              src={iconPath}
              alt={skill.name}
              width={config.icon}
              height={config.icon}
              className="object-contain w-full h-full"
              onError={() => setIconError(true)}
              title={skill.name}
              loading="lazy"
            />
          ) : (
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">
              {skill.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </div>
      
      {showLabel && (
        <span 
          className={`${config.text} font-medium text-center text-gray-700 dark:text-gray-300 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-2`}
          style={{
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {skill.name}
        </span>
      )}
    </div>
  );
};

export default SkillBadge;
