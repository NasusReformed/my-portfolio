interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  // Aquí puedes obtener los datos del proyecto usando params.slug
  const projectName = params.slug.replace(/-/g, ' '); // Formato simple para mostrar

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Detalle del Proyecto: {projectName}</h1>
      <p className="text-lg">
        Esta es la página de detalle para el proyecto con el slug: **`{params.slug}`**.
      </p>
    </div>
  );
}
