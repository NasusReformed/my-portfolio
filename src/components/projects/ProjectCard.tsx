'use client';

import React from 'react';
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="group relative p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 cursor-pointer overflow-hidden max-w-sm mx-auto text-center"
      onClick={onClick}
    >
      {/* Imagen del proyecto */}
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
      )}

      {/* Título */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      {/* Descripción recortada (2 líneas) */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug line-clamp-2">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
