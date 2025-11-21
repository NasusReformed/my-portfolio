export interface Education {
  title: string;
  institution: string;
  period: string;
  imagePath: string;
}

// Routes to the local images of the certificates
const CERTIFICATES_PATH = '/images/certifications';

export const educationData: Education[] = [
  {
    title: 'Ingeniería en Informática',
    institution: 'INACAP Apoquindo',
    period: '2020 - 2024',
    imagePath: `${CERTIFICATES_PATH}/INACAP.png`,
  },
  {
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    period: 'Feb 13, 2025',
    imagePath: `${CERTIFICATES_PATH}/Responsive Web Design.png`,
  },
  {
    title: 'Scientific Computing with Python',
    institution: 'freeCodeCamp',
    period: 'Apr 13, 2025',
    imagePath: `${CERTIFICATES_PATH}/Scientific Computing with Python.png`,
  },
  {
    title: 'Next.js App Router Fundamentals',
    institution: 'Vercel',
    period: 'Jul 5, 2025',
    imagePath: `${CERTIFICATES_PATH}/nextjs.avif`,
  },
  {
    title: 'Data Analysis with Python',
    institution: 'freeCodeCamp',
    period: 'Jul 30, 2025',
    imagePath: `${CERTIFICATES_PATH}/Data Analysis with python.png`,
  },
  {
    title: 'Oracle Cloud Infraestructure 2025 Certified AI Foundations Associate',
    institution: 'Oracle',
    period: 'Aug 5, 2025',
    imagePath: `${CERTIFICATES_PATH}/OCI25AICFA.png`,
  },
  {
    title: 'Building No-Code Apps with AppSheet: Foundations',
    institution: 'Google',
    period: 'Nov 20, 2025',
    imagePath: `${CERTIFICATES_PATH}/AppSheet.png`,
  },
  {
    title: 'Cloud Engineer',
    institution: 'Certification',
    period: 'soon..',
    imagePath: `${CERTIFICATES_PATH}/Soon.jpg`,
  },
];
