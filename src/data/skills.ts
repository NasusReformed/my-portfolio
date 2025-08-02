// This file contains the skills data for the portfolio
// Icons are loaded from /public/images/skills/ directory

export interface Skill {
  name: string;
  // Official website URL (optional)
  url?: string;
  // Optional: Category for filtering (if different from the parent category)
  category?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Helper function to create skill objects with proper URLs
const createSkill = (name: string, url?: string): Skill => ({
  name,
  url: url || `https://www.google.com/search?q=${encodeURIComponent(name)}+technology`,
});

// Skill categories with their respective skills
export const skillsData = [
  {
    title: 'Frontend',
    skills: [
      createSkill('TypeScript'),
      createSkill('JavaScript'),
      createSkill('HTML'),
      createSkill('CSS'),
      createSkill('Tailwind'),
      createSkill('SCSS'),
      createSkill('React'),
      createSkill('Next.js'),
      createSkill('Redux'),
    ],
  },
  {
    title: 'Backend',
    skills: [
      createSkill('Node.js'),
      createSkill('Python'),
      createSkill('Java'),
      createSkill('Django'),
      createSkill('Flask'),
      createSkill('FastAPI'),
    ],
  },
  {
    title: 'Database',
    skills: [
      createSkill('SQL'),
      createSkill('MongoDB'),
      createSkill('MySQL'),
      createSkill('PostgreSQL'),
      createSkill('Oracle'),
      createSkill('Redis'),
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      createSkill('Docker'),
      createSkill('Kubernetes'),
      createSkill('AWS', 'https://aws.amazon.com'),
      createSkill('Azure', 'https://azure.microsoft.com'),
      createSkill('Terraform'),
      createSkill('GitHub Actions'),
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      createSkill('Git'),
      createSkill('GitHub', 'https://github.com'),
      createSkill('GitLab', 'https://gitlab.com'),
      createSkill('Jira'),
      createSkill('Postman'),
      createSkill('VS Code', 'https://code.visualstudio.com/'),
    ],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      createSkill('Python'),
      createSkill('NumPy'),
      createSkill('Pandas'),
      createSkill('Matplotlib'),
      createSkill('Seaborn'),
      createSkill('Jupyter'),
    ],
  },
  {
    title: 'Design & Creative',
    skills: [
      createSkill('Figma', 'https://www.figma.com/'),
      createSkill('Adobe XD', 'https://www.adobe.com/products/xd.html'),
      createSkill('Photoshop', 'https://www.adobe.com/products/photoshop.html'),
      createSkill('Illustrator', 'https://www.adobe.com/products/illustrator.html'),
    ],
  },
];

// Export the skills data as default
export default skillsData;
