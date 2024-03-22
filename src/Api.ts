import { Octokit } from "octokit";
import { LabelType, PermissionType } from "../types/GithubType";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const createOrgRepo = (org: string, repo: string, description: string, isPrivate: boolean) => {
  return octokit.request('POST /orgs/{org}/repos', {
    org,
    name: repo,
    description,
    'private': isPrivate,
  });
}

export const addCollaborator = (org: string, repo: string, username: string, permission: PermissionType = 'push') => {
  return octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
    owner: org,
    repo,
    username,
    permission
  });
}

export const getLabels = (org: string, repo: string) => {
  return octokit.request('GET /repos/{owner}/{repo}/labels', {
    owner: org,
    repo,
  });
}

export const deleteLabel = (org: string, repo: string, labelName: string) => {
  return octokit.request('DELETE /repos/{owner}/{repo}/labels/{name}', {
    owner: org,
    repo,
    name: labelName
  });
}

export const createLabel = (org: string, repo: string, label: LabelType) => {
  return octokit.request('POST /repos/{owner}/{repo}/labels', {
    owner: org,
    repo,
    ...label,
  });
}

export const createMilestone = (org: string, repo: string, milestone: string) => {
  return octokit.request('POST /repos/{owner}/{repo}/milestones', {
    owner: org,
    repo,
    title: milestone,
  })
}