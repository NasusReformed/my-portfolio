// This file contains the skills data for the portfolio
// Icons are loaded from /public/images/skills/ directory

export interface Skill {
  name: string;
  // Official website URL (optional)
  url?: string;
  // Optional: Category for filtering (if different from the parent category)
  category?: string;
  // Optional: Whether to highlight the skill
  highlighted?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Helper function to create skill objects with proper URLs
const createSkill = (name: string, url?: string, highlighted: boolean = false): Skill => ({
  name,
  url: url || `https://www.google.com/search?q=${encodeURIComponent(name)}+technology`,
  highlighted,
});

// Skill categories with their respective skills
export const skillsData = [
  {
    title: 'Programming Languages',
    skills: [
      createSkill('TypeScript', 'https://www.typescriptlang.org'),
      createSkill('JavaScript', 'https://www.javascript.com'),
      createSkill('Python', 'https://www.python.org', true),
      createSkill('Java', 'https://www.java.com'),
      createSkill('HTML', 'https://www.html.com'),
      createSkill('CSS', 'https://www.css.com'),
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
      createSkill('Django', 'https://www.djangoproject.com', true),
      createSkill('FastAPI', 'https://fastapi.tiangolo.com', true),
    ],
  },
  {
    title: 'Databases',
    skills: [
      createSkill('MongoDB', 'https://www.mongodb.com'),
      createSkill('MySQL', 'https://www.mysql.com'),
      createSkill('PostgreSQL', 'https://www.postgresql.org'),
      createSkill('OCI', 'https://www.oracle.com', true),
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
      createSkill('NumPy', 'https://numpy.org', true),
      createSkill('Pandas', 'https://pandas.pydata.org', true),
      createSkill('Matplotlib', 'https://matplotlib.org', true),
      createSkill('Seaborn', 'https://seaborn.pydata.org', true),
      createSkill('Jupyter', 'https://jupyter.org', true),
      createSkill('Anaconda', 'https://www.anaconda.com', true),
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
      createSkill('AI', 'https://www.google.com/ai', true),
    ],
  },
];

// Export the skills data as default
export default skillsData;
