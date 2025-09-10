export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  slug: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface GitHubRepository {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  isFork: boolean;
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
  primaryLanguage: {
    name: string;
  } | null;
}

interface GitHubResponse {
  data: {
    user: {
      repositories: {
        nodes: GitHubRepository[];
      };
    };
  };
}

// Helper function to format repository names into titles
function formatTitle(name: string): string {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const getProjects = async (): Promise<Project[]> => {
  const GITHUB_USERNAME = 'NasusReformed';
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: OWNER) {
          totalCount
          nodes {
            id
            name
            description
            url
            homepageUrl
            isFork
            repositoryTopics(first: 10) {
              totalCount
              nodes {
                topic {
                  name
                }
              }
            }
            primaryLanguage {
              name
            }
            pushedAt
            updatedAt
          }
        }
      }
    }
  `;

  try {
    // In development, we want to bypass all caches
    const fetchOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Cache-Control': 'no-cache, no-store, max-age=0',
        'Pragma': 'no-cache',
      },
      body: JSON.stringify({ query }),
    };

    // Only add cache options if not in development
    if (process.env.NODE_ENV === 'development') {
      fetchOptions.cache = 'no-store' as RequestCache;
    } else {
      // @ts-ignore - This is valid for Next.js fetch
      fetchOptions.next = { revalidate: 300 }; // 5 minutes in production
    }

    const response = await fetch('https://api.github.com/graphql', fetchOptions);

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', await response.text());
      return [];
    }

    const result = await response.json();
    const repos = result.data?.user?.repositories?.nodes || [];

    // Filter and map repositories
    const projects: Project[] = (repos as GitHubRepository[])
      .filter((repo) => {
        // Skip if it's a fork or has no description
        if (repo.isFork || !repo.description) {
          return false;
        }
        
        // Check if repository has the 'portfolio' topic
        const topics = repo.repositoryTopics?.nodes?.map(t => t.topic.name.toLowerCase()) || [];
        return topics.includes('portfolio');
      })
      .map((repo) => {
        // Filter out 'portfolio' from the topics
        const topics = (repo.repositoryTopics?.nodes?.map(t => t.topic.name) || [])
          .filter(topic => topic.toLowerCase() !== 'portfolio');

        return {
          id: repo.id,
          title: formatTitle(repo.name),
          description: repo.description || '',
          longDescription: repo.description || '',
          slug: repo.name,
          imageUrl: '/images/logo.png',
          technologies: topics,
          githubUrl: repo.url,
          liveUrl: repo.homepageUrl || '',
        };
      });

    return projects;
  } catch (error) {
    console.error('Error fetching or processing GitHub projects:', error);
    return [];
  }
};

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
};
