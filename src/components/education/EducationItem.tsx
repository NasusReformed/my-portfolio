import React from 'react';

export interface Education {
  title: string;
  institution: string;
  period: string;
  imageUrl?: string;
  description?: string;
}

export const educationData: Education[] = [
  {
    title: 'Ingeniería en Informática',
    institution: 'INACAP Apoquindo',
    period: '2020 - 2024',
    imageUrl: '/images/education/inacap-degree.jpg',
    description: 'Título profesional de Ingeniero en Informática con especialización en desarrollo de software y gestión de proyectos tecnológicos.'
  },
  {
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    period: 'Feb 13, 2025',
    imageUrl: '/images/education/responsive-web-design.png',
    description: 'Certificación en diseño web responsivo, incluyendo HTML5, CSS3, diseño visual, accesibilidad y principios de diseño web responsivo.'
  },
  {
    title: 'Scientific Computing with Python',
    institution: 'freeCodeCamp',
    period: 'Apr 13, 2025',
    imageUrl: '/images/education/scientific-python.png',
    description: 'Certificación en computación científica con Python, incluyendo estructuras de datos, algoritmos y visualización de datos.'
  },
  {
    title: 'Next.js App Router Fundamentals',
    institution: 'Vercel',
    period: 'Jul 5, 2025',
    imageUrl: '/images/education/nextjs-certificate.png',
    description: 'Fundamentos del enrutamiento en aplicaciones Next.js, incluyendo rutas anidadas, loading states y manejo de errores.'
  },
  {
    title: 'Data Analysis with Python',
    institution: 'freeCodeCamp',
    period: 'Jul 30, 2025',
    imageUrl: '/images/education/data-analysis-python.png',
    description: 'Certificación en análisis de datos con Python, incluyendo Pandas, NumPy, visualización de datos y análisis estadístico.'
  },
];

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const { title, institution, period, description, imageUrl } = education;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Certificate/Degree Image */}
      <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} certificate`}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800">
            <span className="text-4xl text-gray-400 dark:text-gray-600">
              {institution.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2" title={title}>
            {title}
          </h3>
        </div>
        
        <p className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-2">
          {institution}
        </p>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3" title={description}>
            {description}
          </p>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {period}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
