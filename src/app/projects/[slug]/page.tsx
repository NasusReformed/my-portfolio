import { getProjectBySlug, getProjects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import type { Metadata } from 'next';

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
};

// Generate static paths for all projects
export async function generateStaticParams(): Promise<PageParams[]> {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for better SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // Get the project data
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  // Get the project data
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        {project.title}
      </h1>

      {project.imageUrl && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
          <Image
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {project.longDescription}
        </p>

        <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <SiGithub className="mr-2" />
                  View on GitHub
                </Button>
            </Link>
          )}
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  <FiExternalLink className="mr-2" />
                  Live Demo
                </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
