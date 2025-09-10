import React from 'react';
import ProjectListClient from '@/components/projects/ProjectList';
import { getProjects } from '@/lib/data';

const ProjectsSection: React.FC = async () => {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            A selection of some of my recent works.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </div>
        <ProjectListClient projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
