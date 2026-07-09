import { defineConfig } from 'astro/config';

const [githubOwner = '', githubRepo = ''] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isGitHubPagesBuild = Boolean(process.env.GITHUB_ACTIONS && githubOwner && githubRepo);
const isUserOrOrgPage = githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;

// https://astro.build/config
export default defineConfig({
  site: isGitHubPagesBuild ? `https://${githubOwner}.github.io` : undefined,
  base: isGitHubPagesBuild && !isUserOrOrgPage ? `/${githubRepo}` : undefined,
});
