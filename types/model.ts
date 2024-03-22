import { PermissionType } from "./GithubType";

export type MemberType = {
  username: string;
  permission: PermissionType;
}

export type RepoType = {
  name: string;
  description: string;
  isPrivate: boolean;
}

export type TeamType = {
  org: string;
  repo: RepoType,
  members: MemberType[];
}