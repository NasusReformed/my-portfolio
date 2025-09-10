'use client';

import React from 'react';
import { Project } from '@/lib/data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          ✕
        </button>

        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
        )}

        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
