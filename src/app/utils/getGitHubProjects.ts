export type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
};

export const getGitHubProjects = async (): Promise<GitHubRepo[]> => {
  const response = await fetch("https://api.github.com/users/lucallrain/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    console.error(
      `Erreur lors de la récupération des projets : ${response.status} ${response.statusText}`,
      errorDetails
    );
    return [];
  }

  const data: GitHubRepo[] = await response.json();
  console.log("Données des projets récupérées :", data);
  return data.map((repo) => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    html_url: repo.html_url,
  }));
};
