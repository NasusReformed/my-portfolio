import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Proyecto Ejemplo 1',
      description: 'Una breve descripción del proyecto 1.',
      slug: 'proyecto-ejemplo-1',
    },
    {
      id: 2,
      title: 'Proyecto Ejemplo 2',
      description: 'Una breve descripción del proyecto 2.',
      slug: 'proyecto-ejemplo-2',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
