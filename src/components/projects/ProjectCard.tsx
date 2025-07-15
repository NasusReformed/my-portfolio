import React from 'react';
import Card from '../ui/Card';
import Link from 'next/link';
import Button from '../ui/Button';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    slug: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <Link href={`/projects/${project.slug}`}>
        <Button variant="outline">Ver Detalles</Button>
      </Link>
    </Card>
  );
};

export default ProjectCard;
