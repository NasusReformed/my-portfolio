import React from 'react';
import { getProjects } from '@/lib/data';
import ProjectCard from './ProjectCard';

const ProjectList: React.FC = () => {
  const projects = getProjects();

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500">No projects to display at the moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;