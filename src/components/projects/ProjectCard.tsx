import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { getProjects } from '@/lib/data';

type Project = Awaited<ReturnType<typeof getProjects>>[0];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      {project.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link href={`/projects/${project.slug}`} className="w-full">
            <Button variant="outline" className="w-full">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};


export default ProjectCard;
