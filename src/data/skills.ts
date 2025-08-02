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
    title: 'Software Engineer Skills',
    skills: [
      createSkill('TypeScript'),
      createSkill('JavaScript'),
      createSkill('HTML'),
      createSkill('CSS'),
      createSkill('Tailwind'),
      createSkill('SCSS'),
      createSkill('React'),
      createSkill('Next.js'),
      createSkill('Node.js'),
      createSkill('Python'),
      createSkill('Java'),
      createSkill('Django'),
      createSkill('FastAPI'),
      createSkill('SQL'),
      createSkill('MongoDB'),
      createSkill('MySQL'),
      createSkill('PostgreSQL'),
      createSkill('Oracle'),
      createSkill('Docker'),
      createSkill('AWS', 'https://aws.amazon.com'),
      createSkill('Azure', 'https://azure.microsoft.com'),
      createSkill('Terraform'),
      createSkill('Git'),
      createSkill('GitHub', 'https://github.com'),
      createSkill('GitLab', 'https://gitlab.com'),
      createSkill('Bitbucket', 'https://bitbucket.org'),
      createSkill('Jira'),
      createSkill('Postman'),
      createSkill('NumPy'),
      createSkill('Pandas'),
      createSkill('Matplotlib'),
      createSkill('Seaborn'),
      createSkill('Jupyter'),
    ],
  },
];

// Export the skills data as default
export default skillsData;
