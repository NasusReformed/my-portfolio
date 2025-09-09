'use client';

import React from 'react';
import Link from 'next/link';
import { getProjects } from '@/lib/data';

type Project = Awaited<ReturnType<typeof getProjects>>[0];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900/30 text-center">
      <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-snug max-w-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-1.5 max-w-lg">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-[11px] font-medium px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
