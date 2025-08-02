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
const sizeClasses = {
  sm: 'w-12 h-12 p-1',
  md: 'w-16 h-16 p-1',
  lg: 'w-20 h-20 p-1',
};

const iconSizes = {
  sm: 32,
  md: 40,
  lg: 48,
};

const getImagePath = (skillName: string): string => {
  // Map skill names to their corresponding image filenames
  const imageMap: Record<string, string> = {
    // Programming Languages
    'TypeScript': 'typescript.svg',
    'JavaScript': 'javascript-1.svg',
    'Python': 'python-5.svg',
    'Java': 'java.svg',
    'HTML': 'html-1.svg',
    'CSS': 'css-3.svg',
    'SCSS': 'sass-1.svg',
    'Sass': 'sass-1.svg',
    
    // Frontend
    'React': 'react-2.svg',
    'React Native': 'react-native-1.svg',
    'Next.js': 'next-js.svg',
    'Tailwind': 'tailwind-css-2.svg',
    
    // Backend
    'Node.js': 'nodejs-icon.svg',
    'Django': 'django.svg',
    'FastAPI': 'fastapi-1.svg',
    
    // Databases
    'MongoDB': 'mongodb-icon-1.svg',
    'MySQL': 'mysql-logo-pure.svg',
    'PostgreSQL': 'postgresql.svg',
    'Oracle': 'oracle-corporation-logo.svg',
    
    // DevOps & Cloud
    'Docker': 'docker-4.svg',
    'AWS': 'aws-2.svg',
    'Microsoft Azure': 'azure-2.svg',
    'Terraform': 'terraform-enterprise.svg',
    
    // Version Control
    'Git': 'git-icon.svg',
    'GitHub': 'github-icon-1.svg',
    'GitLab': 'gitlab.svg',
    'Bitbucket': 'bitbucket-icon.svg',
    
    // Tools & IDEs
    'Jira': 'jira-1.svg',
    'Postman': 'postman.svg',
    'Jupyter': 'jupyter.svg',
    
    // Data Science
    'NumPy': 'numpy-1.svg',
    'Pandas': 'pandas.svg',
    'Matplotlib': 'matplotlib-1.svg',
    'Seaborn': 'seaborn-1.svg',
    
    // Productivity
    'Google Workspace': 'logo-google-workspace.svg',
  };

  // Use type assertion to ensure TypeScript knows we're handling the undefined case
  const iconName = skillName in imageMap ? imageMap[skillName] : 'default-icon.svg';
  return `/images/skills/${iconName}`;
};

/** A component that displays a skill badge with an icon and optional label
 * Uses local SVG images from the public/images/skills directory*/
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
      className="flex flex-col items-center group"
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={interactive ? 'button' : 'figure'}
      tabIndex={interactive ? 0 : -1}
      aria-label={interactive ? `Learn more about ${skill.name}` : skill.name}
      style={{
        cursor: interactive ? 'pointer' : 'default',
        transition: 'transform 0.2s ease',
        transform: isHovered && interactive ? 'translateY(-2px)' : 'none',
      }}
    >
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="relative w-full h-full flex items-center justify-center">
          {!iconError ? (
            <Image
              src={iconPath}
              alt={skill.name}
              width={iconSizes[size]}
              height={iconSizes[size]}
              className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
              onError={() => setIconError(true)}
              loading="lazy"
              title={skill.name}
            />
          ) : (
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {skill.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </div>
      
      {showLabel && (
        <span 
          className={`text-sm font-medium text-center text-gray-700 dark:text-gray-300 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-1`}
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
