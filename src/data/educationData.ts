export interface Education {
  title: string;
  institution: string;
  period: string;
  imagePath: string;
  certificateUrl: string; // URL del certificado online
}

// Rutas a las imágenes locales de los certificados
const CERTIFICATES_PATH = '/images/certifications';

export const educationData: Education[] = [
  {
    title: 'Ingeniería en Informática',
    institution: 'INACAP Apoquindo',
    period: '2020 - 2024',
    imagePath: `${CERTIFICATES_PATH}/degree-placeholder.png`,
    certificateUrl: 'https://www.inacap.cl/tportalvp/educacion-superior/area-informatica-y-tecnologia/ingenieria-en-informatica/santiago/executive'
  },
  {
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    period: 'Feb 13, 2025',
    imagePath: `${CERTIFICATES_PATH}/Responsive Web Design.png`,
    certificateUrl: 'https://www.freecodecamp.org/certification/nasusreformed/responsive-web-design'
  },
  {
    title: 'Scientific Computing with Python',
    institution: 'freeCodeCamp',
    period: 'Apr 13, 2025',
    imagePath: `${CERTIFICATES_PATH}/Scientific Computing with Python.png`,
    certificateUrl: 'https://www.freecodecamp.org/certification/nasusreformed/scientific-computing-with-python-v7'
  },
  {
    title: 'Next.js App Router Fundamentals',
    institution: 'Vercel',
    period: 'Jul 5, 2025',
    imagePath: `${CERTIFICATES_PATH}/nextjs.avif`,
    certificateUrl: 'https://nextjs.org/learn/certificate?course=dashboard-app&user=73252&certId=dashboard-app-73252-1754351827580'
  },
  {
    title: 'Data Analysis with Python',
    institution: 'freeCodeCamp',
    period: 'Jul 30, 2025',
    imagePath: `${CERTIFICATES_PATH}/Data Analysis with python.png`,
    certificateUrl: 'https://www.freecodecamp.org/certification/nasusreformed/data-analysis-with-python-v7'
  }
];
