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
    title: 'Programming Languages',
    skills: [
      createSkill('TypeScript', 'https://www.typescriptlang.org'),
      createSkill('JavaScript', 'https://www.javascript.com'),
      createSkill('Python', 'https://www.python.org'),
      createSkill('Java', 'https://www.java.com'),
      createSkill('HTML', 'https://www.html.com'),
      createSkill('CSS', 'https://www.css.com'),
      createSkill('SCSS', 'https://sass-lang.com'),
      createSkill('Sass', 'https://sass-lang.com'),
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      createSkill('React', 'https://reactjs.org'),
      createSkill('React Native', 'https://reactnative.dev'),
      createSkill('Next.js', 'https://nextjs.org'),
      createSkill('Tailwind', 'https://tailwindcss.com'),
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      createSkill('Node.js', 'https://nodejs.org'),
      createSkill('Django', 'https://www.djangoproject.com'),
      createSkill('FastAPI', 'https://fastapi.tiangolo.com'),
    ],
  },
  {
    title: 'Databases',
    skills: [
      createSkill('MongoDB', 'https://www.mongodb.com'),
      createSkill('MySQL', 'https://www.mysql.com'),
      createSkill('PostgreSQL', 'https://www.postgresql.org'),
      createSkill('Oracle', 'https://www.oracle.com'),
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      createSkill('Docker', 'https://www.docker.com'),
      createSkill('AWS', 'https://aws.amazon.com'),
      createSkill('Microsoft Azure', 'https://azure.microsoft.com'),
      createSkill('Terraform', 'https://www.terraform.io'),
    ],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      createSkill('NumPy', 'https://numpy.org'),
      createSkill('Pandas', 'https://pandas.pydata.org'),
      createSkill('Matplotlib', 'https://matplotlib.org'),
      createSkill('Seaborn', 'https://seaborn.pydata.org'),
      createSkill('Jupyter', 'https://jupyter.org'),
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      createSkill('Git', 'https://git-scm.com'),
      createSkill('GitHub', 'https://github.com'),
      createSkill('GitLab', 'https://gitlab.com'),
      createSkill('Bitbucket', 'https://bitbucket.org'),
      createSkill('Jira', 'https://www.atlassian.com/software/jira'),
      createSkill('Postman', 'https://www.postman.com'),
      createSkill('Google Workspace', 'https://workspace.google.com'),
    ],
  },
];

// Export the skills data as default
export default skillsData;
