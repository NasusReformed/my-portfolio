interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  slug: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const getProjects = (): Project[] => {
  return [
    {
      id: 1,
      title: 'Portafolio Personal',
      description: 'Mi propio portafolio web construido con Next.js y Tailwind CSS.',
      longDescription:
        'Este proyecto es un ejemplo de mis habilidades en desarrollo frontend y backend con Next.js. Incluye una sección de proyectos dinámicos y un formulario de contacto.',
      slug: 'portafolio-personal',
      imageUrl: '/images/logo.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      githubUrl: 'https://github.com/tu-usuario/my-portfolio',
      liveUrl: 'https://tu-portafolio.com',
    },
    {
      id: 2,
      title: 'Sistema de Gestión de Tareas',
      description: 'Aplicación full-stack para gestionar tareas diarias.',
      longDescription:
        'Desarrollé un sistema completo para crear, editar y eliminar tareas, incluyendo autenticación de usuarios y persistencia de datos.',
      slug: 'sistema-gestion-tareas',
      imageUrl: '/images/logo.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/tu-usuario/task-manager',
      liveUrl: 'https://task-manager-app.com',
    },
  ];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return getProjects().find((project) => project.slug === slug);
};
