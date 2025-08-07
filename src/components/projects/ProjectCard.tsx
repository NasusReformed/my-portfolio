'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import { getProjects } from '@/lib/data';

type Project = Awaited<ReturnType<typeof getProjects>>[0];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const renderProjectImage = () => {
    if (!project.imageUrl || imageError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🖥️</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.title.charAt(0)}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
          unoptimized={process.env.NODE_ENV !== 'production'}
        />
      </div>
    );
  };

  return (
    <Card className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full group">
      <Link href={`/projects/${project.slug}`} className="block h-48 overflow-hidden relative">
        <div className="relative w-full h-full">
          {renderProjectImage()}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-full flex items-center">
              View Project
              <svg 
                className="ml-1.5 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
